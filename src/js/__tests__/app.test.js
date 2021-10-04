import { Magician, Daemon } from "../app.js";

test("check baseAttack", () => {
  const billy = new Magician("Billy");
  const bobby = new Daemon("Bobby");

  const billyAttack = billy.attack;
  const bobbyAttack = bobby.attack;

  const billyExpected = 200;
  const bobbyExpected = 250;

  expect(billyAttack).toBe(billyExpected);
  expect(bobbyAttack).toBe(bobbyExpected);
});

test("check stoned attack without distance", () => {
  const billy = new Magician("Billy");
  const bobby = new Daemon("Bobby");

  billy.stoned = true;
  bobby.stoned = true;

  const billyAttack = billy.attack;
  const bobbyAttack = bobby.attack;

  const billyExpected = 200;
  const bobbyExpected = 250;

  expect(billyAttack).toBe(billyExpected);
  expect(bobbyAttack).toBe(bobbyExpected);
});

test("check stoned attack with wrong distance", () => {
  const billy = new Magician("Billy");
  const bobby = new Daemon("Bobby");

  billy.distance = -1;
  bobby.distance = -1;

  billy.stoned = true;
  bobby.stoned = true;

  const billyAttack = billy.attack;
  const bobbyAttack = bobby.attack;

  const billyExpected = 200;
  const bobbyExpected = 250;

  expect(billyAttack).toBe(billyExpected);
  expect(bobbyAttack).toBe(bobbyExpected);
});

test("check distance attack without stoned", () => {
  const billy = new Magician("Billy");
  const bobby = new Daemon("Bobby");

  billy.distance = 2;
  bobby.distance = 2;

  const billyAttack = billy.attack;
  const bobbyAttack = bobby.attack;

  const billyExpected = 180;
  const bobbyExpected = 225;

  expect(billyAttack).toBe(billyExpected);
  expect(bobbyAttack).toBe(bobbyExpected);
});

test("check distance attack without stoned 2", () => {
  const billy = new Magician("Billy");
  const bobby = new Daemon("Bobby");

  billy.distance = 3;
  bobby.distance = 3;

  const billyAttack = billy.attack;
  const bobbyAttack = bobby.attack;

  const billyExpected = 160;
  const bobbyExpected = 200;

  expect(billyAttack).toBe(billyExpected);
  expect(bobbyAttack).toBe(bobbyExpected);
});

test("check distance attack with stoned", () => {
  const billy = new Magician("Billy");
  const bobby = new Daemon("Bobby");

  billy.distance = 2;
  bobby.distance = 2;

  billy.stoned = true;
  bobby.stoned = true;

  const billyAttack = billy.attack;
  const bobbyAttack = bobby.attack;

  const billyExpected = 175;
  const bobbyExpected = 220;

  expect(billyAttack).toBe(billyExpected);
  expect(bobbyAttack).toBe(bobbyExpected);
});

test("check distance attack with stoned 2", () => {
  const billy = new Magician("Billy");
  const bobby = new Daemon("Bobby");

  billy.distance = 3;
  bobby.distance = 3;

  billy.stoned = true;
  bobby.stoned = true;

  const billyAttack = billy.attack;
  const bobbyAttack = bobby.attack;

  const billyExpected = 152;
  const bobbyExpected = 192;

  expect(billyAttack).toBe(billyExpected);
  expect(bobbyAttack).toBe(bobbyExpected);
});
