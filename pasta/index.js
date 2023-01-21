import { createGlobalState } from 'react-hooks-global-state';
const { setGlobalState, useGlobalState } = createGlobalState({
    defaultCurrency: {}
})
export { setGlobalState, useGlobalState }