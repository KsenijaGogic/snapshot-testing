// https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16#installation
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

configure({ adapter: new Adapter() });
