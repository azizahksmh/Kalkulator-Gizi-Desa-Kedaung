// Data Standar Antropometri 
const zScoresWeightAge = {
  male: { 
    0: {median: 3.3, sd1: 2.9, sd2: 3.9}, 
    1: {median: 4.5, sd1: 3.9, sd2: 5.1},
    2: {median: 5.6, sd1: 4.9, sd2: 6.3},
    3: {median: 6.4, sd1: 5.7, sd2: 7.2},
    4: {median: 7.0, sd1: 6.2, sd2: 7.8},
    5: {median: 7.5, sd1: 6.7, sd2: 8.4},
    6: {median: 7.9, sd1: 7.1, sd2: 8.8},
    7: {median: 8.3, sd1: 7.4, sd2: 9.2},
    8: {median: 8.6, sd1: 7.7, sd2: 9.6},
    9: {median: 8.9, sd1: 8.0, sd2: 9.9},
    10: {median: 9.2, sd1: 8.2, sd2: 10.2}, 
    11: {median: 9.4, sd1: 8.4, sd2: 10.5},
    12: {median: 9.6, sd1: 8.6, sd2: 10.8},
    13: {median: 9.9, sd1: 8.8, sd2: 11},
    14: {median: 10.1, sd1: 9, sd2: 11.3},
    15: {median: 10.3, sd1: 9.2, sd2: 11.5},
    16: {median: 10.5, sd1: 9.4, sd2: 11.7},
    17: {median: 10.7, sd1: 9.6, sd2: 12},
    18: {median: 10.9, sd1: 9.8, sd2: 12.2},
    19: {median: 11.1, sd1: 10, sd2: 12.5},
    20: {median: 11.3, sd1: 10.1, sd2: 12.7}, 
    21: {median: 11.5, sd1: 10.3, sd2: 12.9},
    22: {median: 11.8, sd1: 10.5, sd2: 13.2},
    23: {median: 12, sd1: 10.7, sd2: 13.4},
    24: {median: 12.2, sd1: 10.8, sd2: 13.6},
    25: {median: 12.4, sd1: 11, sd2: 13.9},
    26: {median: 12.5, sd1: 11.2, sd2: 14.1},
    27: {median: 12.7, sd1: 11.3, sd2: 14.3},
    28: {median: 12.9, sd1: 11.5, sd2: 14.5},
    29: {median: 13.1, sd1: 11.7, sd2: 14.8},
    30: {median: 13.3, sd1: 11.8, sd2: 15}, 
    31: {median: 13.5, sd1: 12, sd2: 15.2},
    32: {median: 13.7, sd1: 12.1, sd2: 15.4},
    33: {median: 13.8, sd1: 12.3, sd2: 15.6},
    34: {median: 14, sd1: 12.4, sd2: 15.8},
    35: {median: 14.2, sd1: 12.6, sd2: 16},
    36: {median: 14.3, sd1: 12.7, sd2: 16.2},
    37: {median: 14.5, sd1: 12.9, sd2: 16.4},
    38: {median: 14.7, sd1: 13, sd2: 16.6},
    39: {median: 14.8, sd1: 13.1, sd2: 16.8},
    40: {median: 15, sd1: 13.3, sd2: 17}, 
    41: {median: 15.2, sd1: 13.4, sd2: 17.2},
    42: {median: 15.3, sd1: 13.6, sd2: 17.4},
    43: {median: 15.5, sd1: 13.7, sd2: 17.6},
    44: {median: 15.7, sd1: 13.8, sd2: 17.8},
    45: {median: 15.8, sd1: 14, sd2: 18},
    46: {median: 16, sd1: 14.1, sd2: 18.2},
    47: {median: 16.2, sd1: 14.3, sd2: 18.4},
    48: {median: 16.3, sd1: 14.4, sd2: 18.6},
    49: {median: 16.5, sd1: 14.5, sd2: 18.8},
    50: {median: 16.7, sd1: 14.7, sd2: 19}, 
    51: {median: 16.8, sd1: 14.8, sd2: 19.2},
    52: {median: 17, sd1: 15, sd2: 19.4},
    53: {median: 17.2, sd1: 15.1, sd2: 19.6},
    54: {median: 17.3, sd1: 15.2, sd2: 19.8},
    55: {median: 17.5, sd1: 15.4, sd2: 20},
    56: {median: 17.7, sd1: 15.5, sd2: 20.2},
    57: {median: 17.8, sd1: 15.6, sd2: 20.4},
    58: {median: 18, sd1: 15.8, sd2: 20.6},
    59: {median: 18.2, sd1: 15.9, sd2: 20.8},
    60: {median: 18.3, sd1: 16, sd2: 21}
  },
  female: { 
    0: {median: 3.2, sd1: 2.8, sd2: 3.7}, 
    1: {median: 4.2, sd1: 3.6, sd2: 4.8},
    2: {median: 5.1, sd1: 4.5, sd2: 5.8},
    3: {median: 5.8, sd1: 5.2, sd2: 6.6},
    4: {median: 6.4, sd1: 5.7, sd2: 7.3},
    5: {median: 6.9, sd1: 6.1, sd2: 7.8},
    6: {median: 7.3, sd1: 6.5, sd2: 8.2},
    7: {median: 7.6, sd1: 6.8, sd2: 8.6},
    8: {median: 7.9, sd1: 7, sd2: 9},
    9: {median: 8.2, sd1: 7.3, sd2: 9.3},
    10: {median: 8.5, sd1: 7.5, sd2: 9.6}, 
    11: {median: 8.7, sd1: 7.7, sd2: 9.9},
    12: {median: 8.9, sd1: 7.9, sd2: 10.1},
    13: {median: 9.2, sd1: 8.1, sd2: 10.4},
    14: {median: 9.4, sd1: 8.3, sd2: 10.6},
    15: {median: 9.6, sd1: 8.5, sd2: 10.9},
    16: {median: 9.8, sd1: 8.7, sd2: 11.1},
    17: {median: 10, sd1: 8.9, sd2: 11.4},
    18: {median: 10.2, sd1: 9.1, sd2: 11.6},
    19: {median: 10.4, sd1: 9.2, sd2: 11.8},
    20: {median: 10.6, sd1: 9.4, sd2: 12.1}, 
    21: {median: 10.9, sd1: 9.6, sd2: 12.3},
    22: {median: 11.1, sd1: 9.8, sd2: 12.5},
    23: {median: 11.3, sd1: 10, sd2: 12.8},
    24: {median: 11.5, sd1: 10.2, sd2: 13},
    25: {median: 11.7, sd1: 10.3, sd2: 13.3},
    26: {median: 11.9, sd1: 10.5, sd2: 13.5},
    27: {median: 12.1, sd1: 10.7, sd2: 13.7},
    28: {median: 12.3, sd1: 10.9, sd2: 14},
    29: {median: 12.5, sd1: 11.1, sd2: 14.2},
    30: {median: 12.7, sd1: 11.2, sd2: 14.4}, 
    31: {median: 12.9, sd1: 11.4, sd2: 14.7},
    32: {median: 13.1, sd1: 11.6, sd2: 14.9},
    33: {median: 13.3, sd1: 11.7, sd2: 15.1},
    34: {median: 13.5, sd1: 11.9, sd2: 15.4},
    35: {median: 13.7, sd1: 12, sd2: 15.6},
    36: {median: 13.9, sd1: 12.2, sd2: 15.8},
    37: {median: 14, sd1: 12.4, sd2: 16},
    38: {median: 14.2, sd1: 12.5, sd2: 16.3},
    39: {median: 14.4, sd1: 12.7, sd2: 16.5},
    40: {median: 14.6, sd1: 12.8, sd2: 16.7}, 
    41: {median: 14.8, sd1: 13, sd2: 16.9},
    42: {median: 15, sd1: 13.1, sd2: 17.2},
    43: {median: 15.2, sd1: 13.3, sd2: 17.4},
    44: {median: 15.3, sd1: 13.4, sd2: 17.6},
    45: {median: 15.5, sd1: 13.6, sd2: 17.8},
    46: {median: 15.7, sd1: 13.7, sd2: 18.1},
    47: {median: 15.9, sd1: 13.9, sd2: 18.3},
    48: {median: 16.1, sd1: 14, sd2: 18.5},
    49: {median: 16.3, sd1: 14.2, sd2: 18.8},
    50: {median: 16.4, sd1: 14.3, sd2: 19}, 
    51: {median: 16.6, sd1:  14.5, sd2: 19.2},
    52: {median: 16.8, sd1: 14.6, sd2: 19.4},
    53: {median: 17, sd1: 14.8, sd2: 19.7},
    54: {median: 17.2, sd1: 14.9, sd2: 19.9},
    55: {median: 17.3, sd1: 15.1, sd2: 20.1},
    56: {median: 17.5, sd1: 15.2, sd2: 20.3},
    57: {median: 17.7, sd1: 15.3, sd2: 20.6},
    58: {median: 17.9, sd1: 15.5, sd2: 20.8},
    59: {median: 18, sd1: 15.6, sd2: 21},
    60: {median: 18.2, sd1: 15.8, sd2: 21.2} 
  }
};

const zScoresHeightAge = {
  male: { 
    0: {median: 49.9, sd1: 48, sd2: 51.8}, 
    1: {median: 54.7, sd1: 52.8, sd2: 56.7},
    2: {median: 58.4, sd1: 56.4, sd2: 60.4},
    3: {median: 61.4, sd1: 59.4, sd2: 63.5},
    4: {median: 63.9, sd1: 61.8, sd2: 66},
    5: {median: 65.9, sd1: 63.8, sd2: 68},
    6: {median: 67.6, sd1: 65.5, sd2: 69.8},
    7: {median: 69.2, sd1: 67, sd2: 71.3},
    8: {median: 70.6, sd1: 68.4, sd2: 72.8},
    9: {median: 72, sd1: 69.7, sd2: 74.2},
    10: {median: 73.3, sd1: 71, sd2: 75.6}, 
    11: {median: 74.5, sd1: 72.2, sd2: 76.9},
    12: {median: 75.7, sd1: 73.4, sd2: 78.1},
    13: {median: 76.9, sd1: 74.5, sd2: 79.3},
    14: {median: 78, sd1: 75.6, sd2: 80.5},
    15: {median: 79.1, sd1: 76.6, sd2: 81.7},
    16: {median: 80.2, sd1: 77.6, sd2: 82.8},
    17: {median: 81.2, sd1: 78.6, sd2: 83.9},
    18: {median: 82.3, sd1: 79.6, sd2: 85},
    19: {median: 83.2, sd1: 80.5, sd2: 86},
    20: {median: 84.2, sd1: 81.4, sd2: 87}, 
    21: {median: 85.1, sd1: 82.3, sd2: 88},
    22: {median: 86, sd1: 83.1, sd2: 89},
    23: {median: 86.9, sd1: 83.9, sd2: 89.9},
    24: {median: 87.8, sd1: 84.8, sd2: 90.0},
    25: {median: 88, sd1: 84.9, sd2: 91.1},
    26: {median: 88.8, sd1: 85.6, sd2: 92},
    27: {median: 89.6, sd1: 86.4, sd2: 92.9},
    28: {median: 90.4, sd1: 87.1, sd2: 93.7},
    29: {median: 91.2, sd1: 87.8, sd2: 94.5},
    30: {median: 91.9, sd1: 88.5, sd2: 95.3}, 
    31: {median: 92.7, sd1: 89.2, sd2: 96.1},
    32: {median: 93.4, sd1: 89.9, sd2: 96.9},
    33: {median: 94.1, sd1: 90.5, sd2: 97.6},
    34: {median: 94.8, sd1: 91.1, sd2: 98.4},
    35: {median: 95.4, sd1: 91.8, sd2: 99.1},
    36: {median: 96.1, sd1: 92.4, sd2: 99.8},
    37: {median: 96.7, sd1: 93, sd2: 100.5},
    38: {median: 97.4, sd1: 93.6, sd2: 101.2},
    39: {median: 98, sd1: 94.2, sd2: 101.8},
    40: {median: 98.6, sd1: 94.7, sd2: 102.5}, 
    41: {median: 99.2, sd1: 95.3, sd2: 103.2},
    42: {median: 99.9, sd1: 95.9, sd2: 103.8},
    43: {median: 100.4, sd1: 96.4, sd2: 104.5},
    44: {median: 101, sd1: 97, sd2: 105.1},
    45: {median: 101.6, sd1: 97.5, sd2: 105.7},
    46: {median: 102.2, sd1: 98.1, sd2: 106.3},
    47: {median: 102.8, sd1: 98.6, sd2: 106.9},
    48: {median: 103.3, sd1: 99.1, sd2: 107.5},
    49: {median: 103.9, sd1: 99.7, sd2: 108.1},
    50: {median: 104.4, sd1: 100.2, sd2: 108.7}, 
    51: {median: 105, sd1: 100.7, sd2: 109.3},
    52: {median: 105.6, sd1: 101.2, sd2: 109.9},
    53: {median: 106.1, sd1: 101.7, sd2: 110.5},
    54: {median: 106.7, sd1: 102.3, sd2: 111.1},
    55: {median: 107.2, sd1: 102.8, sd2: 111.7},
    56: {median: 107.8, sd1: 103.3, sd2: 112.3},
    57: {median: 108.3, sd1: 103.8, sd2: 112.8},
    58: {median: 108.9, sd1: 104.3, sd2: 113.4},
    59: {median: 109.4, sd1: 104.8, sd2: 114},
    60: {median: 110, sd1: 105.3, sd2: 114.6} 
  },
  female: { 
    0: {median: 49.1, sd1: 47.3, sd2: 51}, 
    1: {median: 53.7, sd1: 51.7, sd2: 55.6},
    2: {median: 57.1, sd1: 55, sd2: 59.1},
    3: {median: 59.8, sd1: 57.7, sd2: 61.9},
    4: {median: 62.1, sd1: 59.9, sd2: 64.3},
    5: {median: 64, sd1: 61.8, sd2: 66.2},
    6: {median: 65.7, sd1: 63.5, sd2: 68},
    7: {median: 67.3, sd1: 65, sd2: 69.6},
    8: {median: 68.7, sd1: 66.4, sd2: 71.1},
    9: {median: 70.1, sd1: 67.7, sd2: 72.6},
    10: {median: 71.5, sd1: 69, sd2: 73.9}, 
    11: {median: 72.8, sd1: 70.3, sd2: 75.3},
    12: {median: 74, sd1: 71.4, sd2: 76.6},
    13: {median: 75.2, sd1: 72.6, sd2: 77.8},
    14: {median: 76.4, sd1: 73.7, sd2: 79.1},
    15: {median: 77.5, sd1: 74.8, sd2: 80.2},
    16: {median: 78.6, sd1: 75.8, sd2: 81.4},
    17: {median: 79.7, sd1: 76.8, sd2: 82.5},
    18: {median: 80.7, sd1: 77.8, sd2: 83.6},
    19: {median: 81.7, sd1: 78.8, sd2: 84.7},
    20: {median: 82.7, sd1: 79.7, sd2: 85.7}, 
    21: {median: 83.7, sd1: 80.6, sd2: 86.7},
    22: {median: 84.6, sd1: 81.5, sd2: 87.7},
    23: {median: 85.5, sd1: 82.3, sd2: 88.7},
    24: {median: 86.4, sd1: 83.2, sd2: 89.6},
    25: {median: 86.6, sd1: 83.3, sd2: 89.9},
    26: {median: 87.4, sd1: 84.1, sd2: 90.8},
    27: {median: 88.3, sd1: 84.9, sd2: 91.7},
    28: {median: 89.1, sd1: 85.7, sd2: 92.5},
    29: {median: 89.9, sd1: 86.4, sd2: 93.4},
    30: {median: 90.7, sd1: 87.1, sd2: 94.2}, 
    31: {median: 91.4, sd1: 87.9, sd2: 95},
    32: {median: 92.2, sd1: 88.6, sd2: 95.8},
    33: {median: 92.9, sd1: 89.3, sd2: 96.6},
    34: {median: 93.6, sd1: 89.9, sd2: 97.4},
    35: {median: 94.4, sd1: 90.6, sd2: 98.1},
    36: {median: 95.1, sd1: 91.2, sd2: 98.9},
    37: {median: 95.7, sd1: 91.9, sd2: 99.6},
    38: {median: 96.4, sd1: 92.5, sd2: 100.3},
    39: {median: 97.1, sd1: 93.1, sd2: 101.3},
    40: {median: 97.7, sd1: 93.8, sd2: 101.7}, 
    41: {median: 98.4, sd1: 94.4, sd2: 102.4},
    42: {median: 99, sd1: 95, sd2: 103.1},
    43: {median: 99.7, sd1: 95.6, sd2: 103.8},
    44: {median: 100.3, sd1: 96.2, sd2: 104.5},
    45: {median: 100.9, sd1: 96.7, sd2: 105.1},
    46: {median: 101.5, sd1: 97.3, sd2: 105.8},
    47: {median: 102.1, sd1: 97.9, sd2: 106.4},
    48: {median: 102.7, sd1: 98.4, sd2: 107},
    49: {median: 103.3, sd1: 99, sd2: 107.7},
    50: {median: 103.9, sd1: 99.5, sd2: 108.3}, 
    51: {median: 104.5, sd1: 100.1, sd2: 108.9},
    52: {median: 105, sd1: 100.6, sd2: 109.5},
    53: {median: 105.6, sd1: 101.1, sd2: 110.1},
    54: {median: 106.2, sd1: 101.6, sd2: 110.7},
    55: {median: 106.7, sd1: 102.2, sd2: 111.3},
    56: {median: 107.3, sd1: 102.7, sd2: 111.9},
    57: {median: 107.8, sd1: 103.2, sd2: 112.5},
    58: {median: 108.4, sd1: 103.7, sd2: 113},
    59: {median: 108.9, sd1: 104.2, sd2: 113.6},
    60: {median: 109.4, sd1: 104.7, sd2: 114.2} 
  }
};

const zScoresWeightHeight1 = {
  male: { 
    45: {median: 2.4, sd1: 2.2, sd2: 2.7},
    46: {median: 2.6, sd1: 2.4, sd2: 2.9},
    47: {median: 2.8, sd1: 2.5, sd2: 3},
    48: {median: 2.9, sd1: 2.7, sd2: 3.2},
    49: {median: 3.1, sd1: 2.9, sd2: 3.4},
    50: {median: 3.3, sd1: 3, sd2: 3.6},
    51: {median: 3.5, sd1: 3.2, sd2: 39},
    52: {median: 3.8, sd1: 3.5, sd2: 4.1},
    53: {median: 4, sd1: 3.7, sd2: 4.4},
    54: {median: 4.3, sd1: 3.9, sd2: 4.7},
    55: {median: 4.5, sd1: 4.2, sd2: 5},
    56: {median: 4.8, sd1: 4.4, sd2: 5.3},
    57: {median: 5.1, sd1: 4.7, sd2: 5.6},
    58: {median: 5.4, sd1: 5, sd2: 5.9},
    59: {median: 5.7, sd1: 5.3, sd2: 6.2},
    60: {median: 6, sd1: 5.5, sd2: 6.5},
    61: {median: 6.3, sd1: 5.8, sd2: 6.8},
    62: {median: 6.5, sd1: 6, sd2: 7.1},
    63: {median: 6.8, sd1: 6.2, sd2: 7.4},
    64: {median: 7, sd1: 6.5, sd2: 7.6},
    65: {median: 7.3, sd1: 6.7, sd2: 7.9},
    66: {median: 7.5, sd1: 6.9, sd2: 8.2},
    67: {median: 7.7, sd1: 7.1, sd2: 8.4},
    68: {median: 8, sd1: 7.3, sd2: 8.7},
    69: {median: 8.2, sd1: 7.6, sd2: 8.9},
    70: {median: 8.4, sd1: 7.8, sd2: 9.2},
    71: {median: 8.6, sd1: 8, sd2: 9.4},
    72: {median: 8.9, sd1: 8.2, sd2: 9.6},
    73: {median: 9.1, sd1: 8.4, sd2: 9.9},
    74: {median: 9.3, sd1: 8.6, sd2: 10.1},
    75: {median: 9.5, sd1: 8.8, sd2: 10.3},
    76: {median: 9.7, sd1: 8.9, sd2: 10.6},
    77: {median: 9.9, sd1: 9.1, sd2: 10.8},
    78: {median: 10.1, sd1: 9.3, sd2: 11},
    79: {median: 10.3, sd1: 9.5, sd2: 11.2},
    80: {median: 10.4, sd1: 9.6, sd2: 11.4},
    81: {median: 10.6, sd1: 9.8, sd2: 11.6},
    82: {median: 10.8, sd1: 10, sd2: 11.8},
    83: {median: 11, sd1: 10.2, sd2: 12},
    84: {median: 11.3, sd1: 10.4, sd2: 12.2},
    85: {median: 11.5, sd1: 10.6, sd2: 12.5},
    86: {median: 11.7, sd1: 10.8, sd2: 12.8},
    87: {median: 12, sd1: 11.1, sd2: 13},
    88: {median: 12.2, sd1: 11.3, sd2: 13.3},
    89: {median: 12.5, sd1: 11.5, sd2: 13.5},
    90: {median: 12.7, sd1: 11.8, sd2: 13.8},
    91: {median: 13, sd1: 12, sd2: 14.1},
    92: {median: 13.2, sd1: 12.2, sd2: 14.3},
    93: {median: 13.4, sd1: 12.4, sd2: 14.6},
    94: {median: 13.7, sd1: 12.6, sd2: 14.8},
    95: {median: 13.9, sd1: 12.8, sd2: 15.1},
    96: {median: 14.1, sd1: 13.1, sd2: 15.3},
    97: {median: 14.4, sd1: 13.3, sd2: 15.6},
    98: {median: 14.6, sd1: 13.5, sd2: 15.9},
    99: {median: 14.9, sd1: 13.7, sd2: 16.2},
    100: {median: 15.2, sd1: 14, sd2: 16.5},
    101: {median: 15.4, sd1: 14.2, sd2: 16.8},
    102: {median: 15.7, sd1: 14.5, sd2: 17.1},
    103: {median: 16, sd1: 14.8, sd2: 17.4},
    104: {median: 16.3, sd1: 15, sd2: 17.8},
    105: {median: 16.6, sd1: 15.3, sd2: 18.1},
    106: {median: 16.9, sd1: 15.6, sd2: 18.5},
    107: {median: 17.3, sd1: 15.9, sd2: 18.8},
    108: {median: 17.6, sd1: 16.2, sd2: 19.2},
    109: {median: 17.9, sd1: 16.5, sd2: 19.6},
    110: {median: 18.3, sd1: 16.8, sd2: 20},
  },
  female: { 
    45: {median: 2.5, sd1: 2.3, sd2: 2.7},
    46: {median: 2.6, sd1: 2.4, sd2: 2.9},
    47: {median: 2.8, sd1: 2.6, sd2: 3.1},
    48: {median: 3, sd1: 2.7, sd2: 3.3},
    49: {median: 3.2, sd1: 2.9, sd2: 3.5},
    50: {median: 3.4, sd1: 3.1, sd2: 3.7},
    51: {median: 3.6, sd1: 3.3, sd2: 3.9},
    52: {median: 3.8, sd1: 3.5, sd2: 4.2},
    53: {median: 4, sd1: 3.7, sd2: 4.4},
    54: {median: 4.3, sd1: 3.9, sd2: 4.7},
    55: {median: 4.5, sd1: 4.2, sd2: 5},
    56: {median: 4.8, sd1: 4.4, sd2: 5.3},
    57: {median: 5.1, sd1: 4.6, sd2: 5.6},
    58: {median: 5.4, sd1: 4.9, sd2: 5.9},
    59: {median: 5.6, sd1: 5.1, sd2: 6.2},
    60: {median: 5.9, sd1: 5.4, sd2: 6.4},
    61: {median: 6.1, sd1: 5.6, sd2: 6.7},
    62: {median: 6.4, sd1: 5.8, sd2: 7},
    63: {median: 6.6, sd1: 6, sd2: 7.3},
    64: {median: 6.9, sd1: 6.3, sd2: 7.5},
    65: {median: 7.1, sd1: 6.5, sd2: 7.8},
    66: {median: 7.3, sd1: 6.7, sd2: 8},
    67: {median: 7.5, sd1: 6.9, sd2: 8.3},
    68: {median: 7.7, sd1: 7.1, sd2: 8.5},
    69: {median: 8, sd1: 7.3, sd2: 8.7},
    70: {median: 8.2, sd1: 7.5, sd2: 9},
    71: {median: 8.4, sd1: 7.7, sd2: 9.2},
    72: {median: 8.6, sd1: 7.8, sd2: 9.4},
    73: {median: 8.8, sd1: 8, sd2: 9.6},
    74: {median: 9, sd1: 8.2, sd2: 9.8},
    75: {median: 9.1, sd1: 8.4, sd2: 10},
    76: {median: 9.3, sd1: 8.5, sd2: 10.2},
    77: {median: 9.5, sd1: 8.7, sd2: 10.4},
    78: {median: 9.7, sd1: 8.9, sd2: 10.6},
    79: {median: 9.9, sd1: 9.1, sd2: 10.8},
    80: {median: 10.1, sd1: 9.2, sd2: 11},
    81: {median: 10.3, sd1: 9.4, sd2: 11.3},
    82: {median: 10.5, sd1: 9.6, sd2: 11.5},
    83: {median: 10.7, sd1: 9.8, sd2: 11.8},
    84: {median: 11, sd1: 10.1, sd2: 12},
    85: {median: 11.2, sd1: 10.3, sd2: 12.3},
    86: {median: 11.5, sd1: 10.5, sd2: 12.6},
    87: {median: 11.7, sd1: 10.7, sd2: 12.8},
    88: {median: 12, sd1: 11, sd2: 13.1},
    89: {median: 12.2, sd1: 11.2, sd2: 13.4},
    90: {median: 12.5, sd1: 11.4, sd2: 13.7},
    91: {median: 12.7, sd1: 11.7, sd2: 13.9},
    92: {median: 13, sd1: 11.9, sd2: 14.2},
    93: {median: 13.2, sd1: 12.1, sd2: 14.5},
    94: {median: 13.5, sd1: 12.3, sd2: 14.7},
    95: {median: 13.7, sd1: 12.6, sd2: 15},
    96: {median: 14, sd1: 12.8, sd2: 15.3},
    97: {median: 14.2, sd1: 13, sd2: 15.6},
    98: {median: 14.5, sd1: 13.3, sd2: 15.9},
    99: {median: 14.8, sd1: 13.5, sd2: 16.2},
    100: {median: 15, sd1: 13.7, sd2: 16.5},
    101: {median: 15.3, sd1: 14, sd2: 16.8},
    102: {median: 15.6, sd1: 14.3, sd2: 17.1},
    103: {median: 15.9, sd1: 14.5, sd2: 17.5},
    104: {median: 16.2, sd1: 14.8, sd2: 17.8},
    105: {median: 16.5, sd1: 15.1, sd2: 18.2},
    106: {median: 16.9, sd1: 15.4, sd2: 18.5},
    107: {median: 17.2, sd1: 15.7, sd2: 18.9},
    108: {median: 17.6, sd1: 16, sd2: 19.3},
    109: {median: 18, sd1: 16.4, sd2: 19.7},
    110: {median: 18.3, sd1: 16.7, sd2: 20.2}, 
  }
};

const zScoresWeightHeight2 = {
  male: { 
    65: {median: 7.4, sd1: 6.9, sd2: 8.1},
    66: {median: 7.7, sd1: 7.1, sd2: 8.3},
    67: {median: 7.9, sd1: 7.3, sd2: 8.6},
    68: {median: 8.1, sd1: 7.5, sd2: 8.8},
    69: {median: 8.4, sd1: 7.7, sd2: 9.1},
    70: {median: 8.6, sd1: 7.9, sd2: 9.3},
    71: {median: 8.8, sd1: 8.1, sd2: 9.6},
    72: {median: 9, sd1: 8.3, sd2: 9.8},
    73: {median: 9.2, sd1: 8.5, sd2: 10},
    74: {median: 9.4, sd1: 8.7, sd2: 10.3},
    75: {median: 9.6, sd1: 8.9, sd2: 10.5},
    76: {median: 9.8, sd1: 9.1, sd2: 10.7},
    77: {median: 10, sd1: 9.2, sd2: 10.9},
    78: {median: 10.2, sd1: 9.4, sd2: 11.1},
    79: {median: 10.4, sd1: 9.6, sd2: 11.3},
    80: {median: 10.6, sd1: 9.7, sd2: 11.5},
    81: {median: 10.8, sd1: 9.9, sd2: 11.7},
    82: {median: 11, sd1: 10.1, sd2: 11.9},
    83: {median: 11.2, sd1: 10.3, sd2: 12.2},
    84: {median: 11.4, sd1: 10.5, sd2: 12.4},
    85: {median: 11.7, sd1: 10.8, sd2: 12.7},
    86: {median: 11.9, sd1: 11, sd2: 12.9},
    87: {median: 12.2, sd1: 11.2, sd2: 13.2},
    88: {median: 12.4, sd1: 11.5, sd2: 13.5},
    89: {median: 12.6, sd1: 11.7, sd2: 13.7},
    90: {median: 12.9, sd1: 11.9, sd2: 14},
    91: {median: 13.1, sd1: 12.1, sd2: 14.2},
    92: {median: 13.4, sd1: 12.3, sd2: 14.5},
    93: {median: 13.6, sd1: 12.6, sd2: 14.7},
    94: {median: 13.8, sd1: 12.8, sd2: 15},
    95: {median: 14.1, sd1: 13, sd2: 15.3},
    96: {median: 14.3, sd1: 13.2, sd2: 15.5},
    97: {median: 14.6, sd1: 13.4, sd2: 15.8},
    98: {median: 14.8, sd1: 13.7, sd2: 16.1},
    99: {median: 15.1, sd1: 13.9, sd2: 16.4},
    100: {median: 15.4, sd1: 14.2, sd2: 16.7},
    101: {median: 15.6, sd1: 14.4, sd2: 17},
    102: {median: 15.9, sd1: 14.7, sd2: 17.3},
    103: {median: 16.2, sd1: 14.9, sd2: 17.7},
    104: {median: 16.5, sd1: 15.2, sd2: 18},
    105: {median: 16.8, sd1: 15.5, sd2: 18.4},
    106: {median: 17.2, sd1: 15.8, sd2: 18.7},
    107: {median: 17.5, sd1: 16.1, sd2: 19.1},
    108: {median: 17.8, sd1: 16.4, sd2: 19.5},
    109: {median: 18.2, sd1: 16.7, sd2: 19.8},
    110: {median: 18.5, sd1: 17, sd2: 20.2},
    111: {median: 18.9, sd1: 17.3, sd2: 20.7},
    112: {median: 19.2, sd1: 17.6, sd2: 21.1},
    113: {median: 19.6, sd1: 18, sd2: 21.5},
    114: {median: 20, sd1: 18.3, sd2: 21.9},
    115: {median: 20.4, sd1: 18.6, sd2: 22.4},
    116: {median: 20.8, sd1: 19, sd2: 22.8},
    117: {median: 21.2, sd1: 19.3, sd2: 23.3},
    118: {median: 21.6, sd1: 19.7, sd2: 23.7},
    119: {median: 22, sd1: 20, sd2: 24.1},
    120: {median: 22.4, sd1: 20.4, sd2: 24.6} 
  },
  female: { 
    65: {median: 7.2, sd1: 6.6, sd2: 7.9},
    66: {median: 7.5, sd1: 6.8, sd2: 8.2},
    67: {median: 7.7, sd1: 7, sd2: 8.4},
    68: {median: 7.9, sd1: 7.2, sd2: 8.7},
    69: {median: 8.1, sd1: 7.4, sd2: 8.9},
    70: {median: 8.3, sd1: 7.6, sd2: 9.1},
    71: {median: 8.5, sd1: 7.8, sd2: 9.3},
    72: {median: 8.7, sd1: 8, sd2: 9.5},
    73: {median: 8.9, sd1: 8.1, sd2: 9.8},
    74: {median: 9.1, sd1: 8.3, sd2: 10},
    75: {median: 9.3, sd1: 8.5, sd2: 10.2},
    76: {median: 9.5, sd1: 8.7, sd2: 10.4},
    77: {median: 9.6, sd1: 8.8, sd2: 10.6},
    78: {median: 9.8, sd1: 9, sd2: 10.8},
    79: {median: 10, sd1: 9.2, sd2: 11},
    80: {median: 10.2, sd1: 9.4, sd2: 11.2},
    81: {median: 10.4, sd1: 9.6, sd2: 11.4},
    82: {median: 10.7, sd1: 9.8, sd2: 11.7},
    83: {median: 10.9, sd1: 10, sd2: 11.9},
    84: {median: 11.1, sd1: 10.2, sd2: 12.2},
    85: {median: 11.4, sd1: 10.4, sd2: 12.5},
    86: {median: 11.6, sd1: 10.7, sd2: 12.7},
    87: {median: 11.9, sd1: 10.9, sd2: 13},
    88: {median: 12.1, sd1: 11.1, sd2: 13.3},
    89: {median: 12.4, sd1: 11.4, sd2: 13.6},
    90: {median: 12.6, sd1: 11.6, sd2: 13.8},
    91: {median: 12.9, sd1: 11.8, sd2: 14.1},
    92: {median: 13.1, sd1: 12, sd2: 14.4},
    93: {median: 13.4, sd1: 12.3, sd2: 14.7},
    94: {median: 13.6, sd1: 12.5, sd2: 14.9},
    95: {median: 13.9, sd1: 12.7, sd2: 15.2},
    96: {median: 14.1, sd1: 12.9, sd2: 15.5},
    97: {median: 14.4, sd1: 13.2, sd2: 15.8},
    98: {median: 14.7, sd1: 13.4, sd2: 16.1},
    99: {median: 14.9, sd1: 13.7, sd2: 16.4},
    100: {median: 15.2, sd1: 13.9, sd2: 16.7},
    101: {median: 15.5, sd1: 14.2, sd2: 17},
    102: {median: 15.8, sd1: 14.5, sd2: 17.4},
    103: {median: 16.1, sd1: 14.7, sd2: 17.7},
    104: {median: 16.4, sd1: 15, sd2: 18.1},
    105: {median: 16.8, sd1: 15.3, sd2: 18.4},
    106: {median: 17.1, sd1: 15.6, sd2: 18.8},
    107: {median: 17.5, sd1: 15.9, sd2: 19.2},
    108: {median: 17.8, sd1: 16.3, sd2: 19.6},
    109: {median: 18.2, sd1: 16.6, sd2: 20},
    110: {median: 18.6, sd1: 17, sd2: 20.5},
    111: {median: 19, sd1: 17.3, sd2: 20.9},
    112: {median: 19.4, sd1: 17.7, sd2: 21.4},
    113: {median: 19.8, sd1: 18, sd2: 21.8},
    114: {median: 20.2, sd1: 18.4, sd2: 22.3},
    115: {median: 20.7, sd1: 18.8, sd2: 22.8},
    116: {median: 21.1, sd1: 19.2, sd2: 23.3},
    117: {median: 21.5, sd1: 19.6, sd2: 23.8},
    118: {median: 22, sd1: 19.9, sd2: 24.2},
    119: {median: 22.4, sd1: 20.3, sd2: 24.7},
    120: {median: 22.8, sd1: 20.7, sd2: 25.2}
  }
};

function calculateStunting() {
  const age = parseInt(document.getElementById('age').value);
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const gender = document.getElementById('gender').value;

  // Validasi input
  if (!age || !height || !weight) {
    alert("Harap masukkan semua data yang diperlukan!");
    return;
  }

  // 1. Berat Badan terhadap Usia
  let resultWeightAge = calculateZScore(zScoresWeightAge[gender][age], weight);
  document.getElementById('result-weight-age').textContent = 
    `Status Berat Badan Terhadap Usia: ${resultWeightAge}`;

  // 2. Tinggi Badan terhadap Usia
  let resultHeightAge = calculateZScore2(zScoresHeightAge[gender][age], height);
  document.getElementById('result-height-age').textContent =
    `Status Tinggi Badan Terhadap Usia: ${resultHeightAge}`;

  // 3. Berat Badan terhadap Tinggi Badan
  if (age >= 0 && age <= 24) {
    let resultWeightHeight = calculateZScore(zScoresWeightHeight1[gender][Math.round(height)], weight);
    document.getElementById('result-weight-height').textContent =
    `Status Berat Badan Terhadap Tinggi Badan: ${resultWeightHeight}`;
  } else if (age >= 25 && age <= 60) {
    let resultWeightHeight = calculateZScore(zScoresWeightHeight2[gender][Math.round(height)], weight);
    document.getElementById('result-weight-height').textContent =
    `Status Berat Badan Terhadap Tinggi Badan: ${resultWeightHeight}`;
  } else {
    return 'Masukkan angka yang berada dalam rentang'
  }
}

function calculateZScore(data, value) {
  if (!data) return "Data tidak tersedia";
  if ((value - data.median) > 0) {
    zScore = (value - data.median) / (data.sd2 - data.median);
  } else if ((value - data.median) < 0){
    zScore = (value - data.median) / (data.median - data.sd1);
  } else {
    return "Tidak terdefinisi"
  }

  if (zScore < -3) return "Severely Wasted (Sangat Kurus)";
  if (zScore >= -3 && zScore < -2) return "Wasted (Kurus)";
  if (zScore >= -2 && zScore <= 2) return "Normal";
  return "Overweight (Gemuk)";
}

function calculateZScore2(data, value) {
  if (!data) return "Data tidak tersedia";
  if ((value - data.median) > 0) {
    zScore = (value - data.median) / (data.sd2 - data.median);
  } else if ((value - data.median) < 0){
    zScore = (value - data.median) / (data.median - data.sd1);
  } else {
    return "Tidak terdefinisi"
  }

  if (zScore < -2) return "Stunted (Pendek)";
  if (zScore >= -2 && zScore <= 2) return "Normal";
  return "Tall (Tinggi)";
}

function resetForm() {
  // Reset semua input
  document.getElementById('age').value = "";
  document.getElementById('height').value = "";
  document.getElementById('weight').value = "";
  document.getElementById('gender').value = "male";

  // Reset output
  document.getElementById('result-weight-age').textContent = "Status Berat Badan Terhadap Usia: -";
  document.getElementById('result-height-age').textContent = "Status Tinggi Badan Terhadap Usia: -";
  document.getElementById('result-weight-height').textContent = "Status Berat Badan Terhadap Tinggi Badan: -";
}
