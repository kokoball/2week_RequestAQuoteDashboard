import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Dropbox } from '@components/base';
import {
  FilterType,
  objectTypes,
} from '@components/domain/Dropdowns/Dropdowns';
import { ReactComponent as ArrowDropdown } from '@assets/arrowDropdown.svg';
import { getTrutyObjectLength } from '@utils/functions';
import { useToggle, useClickAway } from '@hooks';
import * as S from './Style';

interface DropdownProps {
  dataList: objectTypes;
  filterType: FilterType;
  setMethodList?: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  setMaterialList?: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
}

const Dropdown = ({
  dataList = {},
  filterType,
  setMethodList,
  setMaterialList,
}: DropdownProps) => {
  const DropdownsRef = useRef(null);
  const { isToggle, setIsToggle, onToggle } = useToggle(false);
  const [checkedList, setCheckedList] = useState(0);

  useClickAway(DropdownsRef, () => setIsToggle(false));

  const getFilterType = (filterType: FilterType) =>
    filterType === 'method' ? '가공방식' : '재료';

  const filterTypeToKorean = useMemo(
    () => getFilterType(filterType),
    [filterType]
  );

  useEffect(() => {
    setCheckedList(getTrutyObjectLength(dataList));
  }, [dataList]);

  return (
    <S.Form onClick={onToggle} checkedList={checkedList} ref={DropdownsRef}>
      <span>
        {filterTypeToKorean}
        {checkedList > 0 && `(${checkedList})`}
      </span>
      <ArrowDropdown />
      {isToggle && (
        <Dropbox
          filterType={filterType}
          dataList={dataList}
          setMethodList={setMethodList}
          setMaterialList={setMaterialList}
        />
      )}
    </S.Form>
  );
};

export default React.memo(Dropdown);
