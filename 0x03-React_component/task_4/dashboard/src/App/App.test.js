/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import App from "./App";
import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("Test App.js", () => {
  it("App without crashing", (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it("div with the class App-header", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className="App-header" />));
    done();
  });

  it("div with the class App-body", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className="App-body" />));
    done();
  });

  it("div with the class App-footer", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className="App-footer" />));
    done();
  });

  it("App contains the notifications component", () => {
    const appWrapper = shallow(<App />);
    expect(
      appWrapper.containsMatchingElement(
        <Notifications />,
        <Header />,
        <Footer />,
        <Login />
      )
    ).toBe(true);
  });

  it("App does not render course list if logged out", () => {
    const appWrapper = shallow(<App />);
    appWrapper.setProps({ isLoggedIn: false });
    expect(appWrapper.contains(<CourseList />)).toBe(false);
  });

  it("App renders courselist if logged in", () => {
    const appWrapper = shallow(<App />);
    appWrapper.setProps({ isLoggedIn: true });
    expect(appWrapper.contains(<CourseList />)).toBe(true);
    expect(appWrapper.contains(<Login />)).toBe(false);
  });
});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  document.alert = jest.fn();
  it("checks that alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  document.alert.mockClear();
});
