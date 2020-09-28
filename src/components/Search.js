import React from 'react';
import styled from 'styled-components';

const Search = () => {
  const SearchStyle = styled.div`
    display: inline-block;
    width: 430px;
    height: 500px;
    background-color: white;
    position: relative;
    /* 겹치듯이 사용할려면 무조건 렐러티브 */
    top: 10px;
    left: 50px;
    padding: 20px 30px;
    /* padding: 20px 30px 20px 30px; */
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;
  const SearchSubTitleStyle = styled.td`
    font-weight: 600;
    font-size: 12px;
    padding: 10px 0px;
  `;
  const SearchInputStyle = styled.input`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const SearchSelectStyle = styled.select`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const SearchButtonBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: end;
    padding: 20px 0px;
    /* 세로 가로 */
  `;
  const SearchButtonStyle = styled.button`
    color: white;
    background-color: rgb(255, 90, 95);
    font-size: 15px;
    font-weight: 700;
    width: 70px;
    height: 45px;
    border-radius: 6px;
    border: 0px;
    cursor: pointer;
  `;
  return (
    <SearchStyle>
      <SearchTitleStyle>
        특색 있는 숙소와 즐길 <br />
        거리를 예약하세요.
      </SearchTitleStyle>
      <table style={{ width: '100%' }}>
        <tr>
          <SearchSubTitleStyle colSpan="2">목적지</SearchSubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchInputStyle type="text" placeholder="모든 위치" />
          </td>
        </tr>
        <tr>
          <SearchSubTitleStyle>체크인</SearchSubTitleStyle>
          <SearchSubTitleStyle>체크 아웃</SearchSubTitleStyle>
        </tr>
        <tr>
          <td>
            <SearchInputStyle type="date" />
          </td>
          <td>
            <SearchInputStyle type="date" />
          </td>
        </tr>
        <tr>
          <SearchSubTitleStyle colSpan="2">인원</SearchSubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchSelectStyle>
              <option>인원</option>
            </SearchSelectStyle>
          </td>
        </tr>
      </table>
      <SearchButtonBoxStyle>
        <SearchButtonStyle>검색</SearchButtonStyle>
      </SearchButtonBoxStyle>
    </SearchStyle>
  );
};

export default Search;
