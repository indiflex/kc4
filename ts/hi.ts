import { add } from "korean";
import { time1 } from "./hello";

export function getScore(subject: "국" | "영" | "수") {
  return "과목: " + subject;
}

export function isValid() {
  return true;
}

export function myAdd(a: number, b: number) {
  const sum = add(a, b);
  console.log("🚀  sum:", sum);
  return sum;
}

console.log("***>>", time1());
myAdd(10, 20);
