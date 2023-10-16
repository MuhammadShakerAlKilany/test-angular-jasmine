import { SquarePipeForLab } from "./square.pipe"

describe("1-square pipe (isolation) testing:",()=>{
    let pipe:SquarePipeForLab;
    beforeEach(()=>{
         pipe = new SquarePipeForLab()
    })
    it("expect to return 16 when passing 4",()=>{
      expect(pipe.transform(4)).toBe(16)
    })
    it("expect to return 'Not a number' when passing wrong parameter",()=>{
        expect(pipe.transform("test")).toBe("Not a number")
    })
})