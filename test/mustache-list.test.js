import mustache from "mustache";
import fs from "fs/promises";


test("List", async () => {
    const helloTemplate = await fs.readFile("./templates/hobbies.mustache")
        .then(data => data.toString());

    const data = mustache.render(helloTemplate, {
        hobbies: ["Coding", "Gaming", "Reading"]
    });
    console.info(data);
    expect(data).toContain("Coding");
    expect(data).toContain("Gaming");
    expect(data).toContain("Reading");
});

test("List Object", async () => {
    const helloTemplate = await fs.readFile("./templates/students.mustache")
        .then(data => data.toString());

    const data = mustache.render(helloTemplate, {
        students: [
            {name: "Eko", value: 100},
            {name: "Budi", value: 95}
        ]
    });
    console.info(data);
    expect(data).toContain("Eko");
    expect(data).toContain("Budi");
    expect(data).toContain("100");
    expect(data).toContain("95");
});