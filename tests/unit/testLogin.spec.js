import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import Login from "../../src/components/Auth/Login";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Login form', () => {
    it('calls the login action correctly', () => {
        const loginMock = jest.fn(() => Promise.resolve());
        const store = new Vuex.Store({
            actions: {
                retrieveToken: loginMock
            }
        });
        const wrapper = mount(Login, { localVue, store });
        wrapper.find('button').trigger('click');
        expect(loginMock).toHaveBeenCalled();
    });
});
