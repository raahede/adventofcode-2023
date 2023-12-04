import { describe, expect, it } from 'vitest';
import {
  concatNumberFromFirstAndLastItem,
  getNumbersFromString,
  getRowResultB,
  getRowsFromTextBlock,
  getSum,
  solvePuzzleA,
  solvePuzzleB,
} from './shared';

const testData1 = `

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

`;

const testData2 = `

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen

`;

describe('getRowsFromTextBlock', () => {
  it('returns cleaned rows from text block', () => {
    expect(getRowsFromTextBlock(testData1)).toStrictEqual([
      '1abc2',
      'pqr3stu8vwx',
      'a1b2c3d4e5f',
      'treb7uchet',
    ]);
  });
});

describe('getNumbersFromString', () => {
  it('returns all numbers from string', () => {
    expect(getNumbersFromString('1abc2')).toStrictEqual([1, 2]);
    expect(getNumbersFromString('pqr3stu8vwx')).toStrictEqual([3, 8]);
    expect(getNumbersFromString('a1b2c3d4e5f')).toStrictEqual([1, 2, 3, 4, 5]);
    expect(getNumbersFromString('treb7uchet')).toStrictEqual([7]);
  });
});

describe('concatNumberFromFirstAndLastItem', () => {
  it('concats only first and last item', () => {
    expect(concatNumberFromFirstAndLastItem([3, 8])).toBe(38);
    expect(concatNumberFromFirstAndLastItem([1, 2, 3, 4, 5])).toBe(15);
  });

  it('if only one item, return it as first and second', () => {
    expect(concatNumberFromFirstAndLastItem([7])).toBe(77);
  });
});

describe('getSum', () => {
  it('calculates sum of numbers', () => {
    expect(getSum([12, 38, 15, 77])).toBe(142);
    expect(getSum([29, 83, 13, 24, 42, 14, 76])).toBe(281);
  });
});

describe('getRowResultB', () => {
  it('gets concatenated number from string', () => {
    expect(getRowResultB('fourbsqr7bktkbqbdlpfour')).toBe(44);
    expect(getRowResultB('ssdxrgjncdxscf8threetfcgknm9three')).toBe(83);
    expect(getRowResultB('1fourthreetpmqqtzgtwofour')).toBe(14);
    expect(getRowResultB('fourtwofdxcjgcgdonedpmzseven3four')).toBe(44);
    expect(getRowResultB('73bonesevenone')).toBe(71);
    expect(getRowResultB('foureightpbxbfsqtdffmxsdrzpx5fournineeight')).toBe(
      48,
    );
    expect(getRowResultB('nine1ninecmj')).toBe(99);
    expect(getRowResultB('ntlznczfone7ninesixxtxbkvpkonebmbc')).toBe(11);
    expect(getRowResultB('nine8msxvtnkzqhhnj128')).toBe(98);
    expect(getRowResultB('sptoneight5jmvqdkfvbgfour3one')).toBe(11);
    expect(getRowResultB('579eightfoureightsevenfgpbdvhmeight')).toBe(58);
    expect(getRowResultB('7skqhfour7')).toBe(77);
    expect(getRowResultB('bpgknpmjeightonepxd8fiveone1twonekz')).toBe(81);
    expect(getRowResultB('9six58sixt9six')).toBe(96);
    expect(getRowResultB('jpprfgxthree326ckxnqthree')).toBe(33);
    expect(getRowResultB('1hczkfhmsixhrkkkqjcbeight1zbgcxzrffr')).toBe(11);
    expect(getRowResultB('8threelhtfzzc7oneone7')).toBe(87);
    expect(getRowResultB('2pkfxntlfivetwo5eightwovf')).toBe(22);
    expect(getRowResultB('six5kxrtwo65')).toBe(65);
    expect(getRowResultB('nine32fivefive3sevennine')).toBe(99);
    expect(getRowResultB('seventwofivefourhcfour6threefive')).toBe(75);
    expect(getRowResultB('onezgsix79bbrrfneight9')).toBe(19);
    expect(getRowResultB('bcjlseven4679bpm74')).toBe(74);
    expect(getRowResultB('cxhtfrpvrtwobslfqnvvs56cfnmqgcz75mvzkcf')).toBe(25);
    expect(getRowResultB('rlhcgklnt56brh8ffnd5')).toBe(55);
    expect(getRowResultB('gtxxms528four72')).toBe(52);
    expect(getRowResultB('eightnine87smpxstvxfivenine')).toBe(89);
    expect(getRowResultB('twoeightfive9eightwov')).toBe(22);
    expect(getRowResultB('eightvqq45gtj95')).toBe(85);
    expect(getRowResultB('2ninegmvnmhm9ninetwoone5nine')).toBe(29);
    expect(getRowResultB('six969jxvr')).toBe(69);
    expect(getRowResultB('953jjtsixhjkddzjvkcr53')).toBe(93);
    expect(getRowResultB('ninetwolhdzlmnglp6sixjljlkhgtggqv36')).toBe(96);
    expect(getRowResultB('qgltwone6seven6one')).toBe(21);
    expect(getRowResultB('zljlzdbtcx6threenine7nine')).toBe(69);
    expect(getRowResultB('eight3three57ninethree')).toBe(83);
    expect(getRowResultB('fivethreetwo11ninevkqnineeightwof')).toBe(52);
    expect(getRowResultB('9mxdzbhqsixfstccqkkbtkmplrhqknfxnpdnhzhstwo9')).toBe(
      99,
    );
    expect(getRowResultB('647dhxkdgfcpppcrg6nxgsbgfm4')).toBe(64);
    expect(getRowResultB('fctwone8ninethreetwo')).toBe(22);
    expect(getRowResultB('9kfnvmbpk8ninefivegpcxjvtrxhtggnine')).toBe(99);
    expect(getRowResultB('fivenqeightninezmrm2vpdptlrnine')).toBe(59);
    expect(getRowResultB('75eighthmj93threeeight')).toBe(78);
    expect(getRowResultB('16five5ptprsjtp31five')).toBe(15);
    expect(getRowResultB('3hqszrplfjfivethreefive')).toBe(35);
    expect(getRowResultB('rlllkslz6sevendfth2seven')).toBe(67);
    expect(getRowResultB('4nine4')).toBe(44);
    expect(getRowResultB('26six1threeeightvnkdvqqkxs1')).toBe(21);
    expect(getRowResultB('2nine8nine')).toBe(29);
    expect(getRowResultB('6fivehnfoureightfivefourfive')).toBe(65);
    expect(getRowResultB('seventwoblkspmfour2eightthreezjpxxxkr2')).toBe(72);
    expect(getRowResultB('795nrmlvntwo7')).toBe(77);
    expect(getRowResultB('4ninethree7twothree')).toBe(43);
    expect(getRowResultB('jvdpjdgskqtt8cks2gbghxzmtc98')).toBe(88);
    expect(getRowResultB('ptgkqcsxv7jmshz8kqxjxsrzc52four8')).toBe(78);
    expect(getRowResultB('bnnqtxrq4four554zmgfmzcttb')).toBe(44);
    expect(getRowResultB('seven2fournine4seven')).toBe(77);
    expect(getRowResultB('867rfvjx6857')).toBe(87);
    expect(getRowResultB('45twothreenine6twot')).toBe(42);
    expect(getRowResultB('bhxsnhdseveneight4sevenfourfourfiveseven')).toBe(77);
    expect(getRowResultB('5fourmsvb9kcmhvv75')).toBe(55);
    expect(getRowResultB('3six91six')).toBe(36);
    expect(getRowResultB('dqxnngrdpgngszsljponethree2gmnjjpktpvnine2')).toBe(
      12,
    );
    expect(getRowResultB('542nine5nine5')).toBe(55);
    expect(getRowResultB('three5tkfvxxrpceight86khcqbnjjsixeight')).toBe(38);
    expect(getRowResultB('9one69dvnxsrqd')).toBe(99);
    expect(getRowResultB('four19four')).toBe(44);
    expect(getRowResultB('4nine6gstzmsjndcthree4cmrhgnnq')).toBe(44);
    expect(getRowResultB('fxstzpjmjt85bsvlfktflq348')).toBe(88);
    expect(getRowResultB('seven5tlcthreethree75')).toBe(75);
    expect(getRowResultB('one12bkxtnxrsrg1')).toBe(11);
    expect(getRowResultB('86nndqtbpgz8')).toBe(88);
    expect(getRowResultB('9fourprkvkvnczdk9')).toBe(99);
    expect(getRowResultB('11hp2bbhjcxthreenineonenine')).toBe(19);
    expect(getRowResultB('2five9onethreejvnnzfourtwonefr')).toBe(21);
    expect(getRowResultB('one19twodxvdnkgcr1nhlmcjqcsrdcx')).toBe(11);
    expect(getRowResultB('gjpprh3eightcnpbtskmpponexrxfivesgprhdkx3')).toBe(33);
    expect(getRowResultB('6threefourfourseventhree')).toBe(63);
    expect(getRowResultB('7p7qqtssffh57')).toBe(77);
    expect(getRowResultB('6twobmqplkv6')).toBe(66);
    expect(getRowResultB('fhskqtwoseven8four8hksjpvntr')).toBe(28);
    expect(getRowResultB('9kqzczkflbdxp5xzxdqdgsix9')).toBe(99);
    expect(getRowResultB('fivethreeeightseven19five')).toBe(55);
    expect(getRowResultB('kxn6426qcdvhnmjsgj')).toBe(66);
    expect(getRowResultB('3five18four2five')).toBe(35);
    expect(getRowResultB('k5six536eight5')).toBe(55);
    expect(getRowResultB('fczkrsphfknkf4one93threetwoned')).toBe(41);
    expect(getRowResultB('5k7three7')).toBe(57);
    expect(getRowResultB('2pvvtpzpktjnine5phrthree8three')).toBe(23);
    expect(getRowResultB('three5seventhreexsbbrmlnqb9fourqqbcrg9')).toBe(39);
    expect(getRowResultB('twothree8five9kqkzjcqxmt2nine8')).toBe(28);
    expect(getRowResultB('fkpbcj2six2')).toBe(22);
    expect(getRowResultB('6five7fourdccz468five')).toBe(65);
    expect(getRowResultB('twomhll7sxjtwoone7dhzbhphlpmlhx')).toBe(27);
    expect(getRowResultB('pxgzkvmgvmxshtstmfiveone51jhphcplgmzsix5')).toBe(55);
    expect(getRowResultB('4one1three7nfgrcdone4xspqs')).toBe(44);
    expect(getRowResultB('teightwo786fourdll7')).toBe(87);
    expect(getRowResultB('krmeightwofourkzrceightsevensevenfffnnnp1two')).toBe(
      82,
    );
    expect(getRowResultB('blclfqtpfiveseventhreens3one2one')).toBe(51);
    expect(getRowResultB('tvtwonenine9rhs6five56')).toBe(26);
    expect(getRowResultB('4two41pqfnbfvqqr3twodzjntlxmkhzcr')).toBe(42);
    expect(getRowResultB('four345five143')).toBe(43);
    expect(getRowResultB('bzzlthxrjkgthree1ninedk5three1')).toBe(31);
    expect(getRowResultB('3six3')).toBe(33);
    expect(getRowResultB('seventhreesix8twohjdhjoneeightsix')).toBe(76);
    expect(getRowResultB('two4twofourone1tfpbpqldqgthree1')).toBe(21);
    expect(getRowResultB('eightzzxgdhsfnp5seven6eight2szsseven')).toBe(87);
    expect(getRowResultB('fivevdhgg5two1hpnjlvkeighttwo')).toBe(52);
    expect(getRowResultB('rxbdxskdsevenltqgkbkxone5nineonemxgctrc')).toBe(71);
    expect(getRowResultB('ltxxfvpssbfivekxx7two78jrkdxfxk7')).toBe(57);
    expect(getRowResultB('9gtzflksmfourthree4threef')).toBe(93);
    expect(getRowResultB('bsbpqtzsttwo65zkdsg8twojxgrxkrc')).toBe(22);
    expect(getRowResultB('4twozgxqjbdsone963two')).toBe(42);
    expect(getRowResultB('vghlvmp7four6two7')).toBe(77);
    expect(getRowResultB('94six8329')).toBe(99);
    expect(getRowResultB('vggvnhqkjseventwo4onetwonftrnd')).toBe(72);
    expect(getRowResultB('nine6five181')).toBe(91);
  });
});

describe('solvePuzzleA', () => {
  it('does the thing...', () => {
    expect(solvePuzzleA(testData1)).toBe(142);
  });
});

describe('solvePuzzleB', () => {
  it('does the thing...', () => {
    expect(solvePuzzleB(testData2)).toBe(281);
  });
});
