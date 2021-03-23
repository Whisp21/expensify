import { login, logout } from "../../actions/auth";

test("should complete login successfully", () => {
  const uid = "abc12345";
  const loginUser = login(uid);
  expect(loginUser).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should complete logout successfully", () => {
  const loginUser = logout();
  expect(loginUser).toEqual({
    type: "LOGOUT"
  });
});
