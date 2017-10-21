// @flow

import { createDPTable } from "utils/dp-helper";
import { longestString } from "utils/generic-helper";
import { createDpTable as comparedTable, createStyleTable } from "./algorithm";

import {
  DEFAULT_STYLE,
  ON_GOING_STYLE,
  INDICATE_STYLE,
  DISABLE_TABLE_BUTTON
} from "./redux/constants";

const createStyles = (wordOne, wordTwo): Array<Array<string>> => {
  const result = createStyleTable(
    wordTwo,
    wordOne,
    DEFAULT_STYLE,
    ON_GOING_STYLE,
    DISABLE_TABLE_BUTTON
  );
  result[1][0] = INDICATE_STYLE;
  result[0][1] = INDICATE_STYLE;
  return result;
};

export const createInitialState = (wordOne: string, wordTwo: string) => {
  const longerStr: string = longestString(wordOne, wordTwo);
  const buttons = () => Array.from(Array(longerStr.length + 1).keys());
  const style = createStyles(wordOne, wordTwo);
  return {
    table: createDPTable(wordOne, wordTwo),
    compared: comparedTable(wordOne, wordTwo),
    styles: style,
    buttons: buttons(),
    row: 1,
    col: 1,
    score: longerStr.length,
    steps: 0,
    errors: 0
  };
};