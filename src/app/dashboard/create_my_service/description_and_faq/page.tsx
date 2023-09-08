import SimpleBtn from "@/components/shared/btn/SimpleBtn"

const Description = () => {
    return (
        <>
        <h1 className="text-3xl font-bold my-4">
            Description
        </h1>
        <form>
        <textarea name="" id="" placeholder="Write about your Description" className="border p-3 w-full h-[300px] block lg:w-[500px]"></textarea>
        <SimpleBtn className="mt-10">
            <input type="submit" value="Save" />
        </SimpleBtn>
        </form>

        <form>

        </form>
        </>
    )
}

export default Description