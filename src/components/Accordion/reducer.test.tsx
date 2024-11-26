import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed shoul be false", () => {
    //data
    const state: StateType = {
        collapsed: true,
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(false);
})
test("collapsed shoul be true", () => {
    //data
    const state: StateType = {
        collapsed: false,
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(true);
})