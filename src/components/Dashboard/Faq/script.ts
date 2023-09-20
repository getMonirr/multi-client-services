document.getElementById("addQue")?.addEventListener("click", () => {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    const label: HTMLLabelElement | Element | any = document.createElement("label");
    const input: any = document.createElement("input");
    input.setAttrubute("className", "w-full lg:w-[500px] border py-4 px-2 font-lg")

    const content: any = div.append(label, input);
    container?.appendChild(content)
})

