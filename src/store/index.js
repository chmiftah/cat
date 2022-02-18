import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const {persistAtom} = recoilPersist()

const exams = atom({
    key:'state',
    default: {
        exam: [],
        check: false,
    },
    effects_UNSTABLE:[persistAtom],
})


export {exams}