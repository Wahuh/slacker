import {
    id,
    email,
} from "./reducers";
import { loadUserData } from "./actions";

import { userData } from "../../../tests/data/user";
import { loadUserPayload } from "../../../tests/payloads/user";

describe("User Reducers", () => {
    describe("id", () => {
        const initialState = null;
        it("should return the initial state", () => {
            expect(id(undefined, {})).toEqual(initialState);
        });

        it("handles loading the user's data", () => {
            const { result: userId } = loadUserPayload;
            expect(id(initialState, loadUserData(userData)))
            .toEqual(userId);
        });
    });

    describe("email", () => {
        const initialState = null;
        it("should return the initial state", () => {
            expect(email(undefined, {})).toEqual(initialState);
        });

        it("handles loading the user's data", () => {
            const { entities, result: userId } = loadUserPayload;
            const { user } = entities;
            expect(email(initialState, loadUserData(userData)))
            .toEqual(user[userId].email);
        });
    });
});