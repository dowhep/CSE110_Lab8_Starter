// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('test isPhoneNumber true 1', () => {
  expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
});

test('test isPhoneNumber true 2', () => {
  expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('test isPhoneNumber false 1', () => {
  expect(functions.isPhoneNumber("1,234,567,890")).toBe(false);
});

test('test isPhoneNumber false 2', () => {
  expect(functions.isPhoneNumber("123456789.0")).toBe(false);
});

test('test isEmail true 1', () => {
  expect(functions.isEmail("never@gonna.com")).toBe(true);
});

test('test isEmail true 2', () => {
  expect(functions.isEmail("give@you.up")).toBe(true);
});

test('test isEmail false 1', () => {
  expect(functions.isEmail("nevergonna")).toBe(false);
});

test('test isEmail false 2', () => {
  expect(functions.isEmail("let@you.down")).toBe(false);
});

test('test isStrongPassword true 1', () => {
  expect(functions.isStrongPassword("rickroll")).toBe(true);
});

test('test isStrongPassword true 2', () => {
  expect(functions.isStrongPassword("inevitable")).toBe(true);
});

test('test isStrongPassword false 1', () => {
  expect(functions.isStrongPassword("1ncredible")).toBe(false);
});

test('test isStrongPassword false 2', () => {
  expect(functions.isStrongPassword("i")).toBe(false);
});

test('test isDate true 1', () => {
  expect(functions.isDate("00/00/0000")).toBe(true);
});

test('test isDate true 2', () => {
  expect(functions.isDate("0/0/0000")).toBe(true);
});

test('test isDate false 1', () => {
  expect(functions.isDate("00000000")).toBe(false);
});

test('test isDate false 2', () => {
  expect(functions.isDate("$$/##/%%%%")).toBe(false);
});

test('test isHexColor true 1', () => {
  expect(functions.isHexColor("ABABFF")).toBe(true);
});

test('test isHexColor true 2', () => {
  expect(functions.isHexColor("#BADAB0")).toBe(true);
});

test('test isHexColor false 1', () => {
  expect(functions.isHexColor("short")).toBe(false);
});

test('test isHexColor false 2', () => {
  expect(functions.isHexColor("#loooong")).toBe(false);
});