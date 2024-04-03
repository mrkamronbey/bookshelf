import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 10px 0;
`;

export const Heading = styled(Typography)`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Span = styled(Typography)`
  color: #6200ee;
  padding-left: 10px;
`;

export const CreateButton = styled(Button)`
  background: #6200ee !important;
  color: #fff !important;
  padding: 10px 20px !important;
  text-transform: none !important;
  border-radius: 7px !important;
`;

export const CardList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GridWrapper = styled.div`
  overflow-y: auto;
  height: 470px;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const NoData = styled.div`
  width: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 41px 41px 5px -5px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 41px 41px 5px -5px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 41px 41px 5px -5px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  border: 2px solid #000;
`;
