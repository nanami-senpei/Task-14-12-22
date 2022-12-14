function CombinationRepetitionUtil(chosen, arr, index, r, start, end) {
  if (index == r) {
    for (var i = 0; i < r; i++) {
      document.write(arr[chosen[i]] + ' ');
    }
    document.write('<br>');
    return;
  }
  for (var i = start; i <= end; i++) {
    chosen[index] = i;
    CombinationRepetitionUtil(chosen, arr, index + 1, r, i, end);
  }
  return;
}
function CombinationRepetition(arr, n, r) {
  var chosen = Array.from({ length: r + 1 }, (_, i) => 0);

  CombinationRepetitionUtil(chosen, arr, 0, r, 0, n - 1);
}

var arr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '+',
  '-',
  '&',
  '||',
  '!',
  '(',
  ')',
  '{',
  '}',
  '[',
  ']',
  '^',
  '~',
  '*',
  '?',
  ':',
  '"',
  '\\',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

document.addEventListener('DOMContentLoaded', function (event) {
  var n = arr.length;
  var submitBtn = document.querySelector('#submit');
  var input = document.querySelector('#input');

  submitBtn.addEventListener('click', function () {
    CombinationRepetition(arr, n, input.value);
    console.log(input.value);
    console.log('btn clicked');
  });
});
