"use server";
import { cookies } from "next/headers";

export async function createCookie (name, value, options) {
  cookies().set(name, value, options);
};

export async function destroyCookie (name) {
  cookies().delete(name);
};