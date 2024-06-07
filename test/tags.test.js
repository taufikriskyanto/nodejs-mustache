import mustache from "mustache";
import fs from "fs/promises";


test("Mustache File", async ()=>{
    const helloTemplate = await fs.readFile("./templates/hello.mustache")
                            .then(data => data.toString());

    const data = mustache.render(helloTemplate, {
        title : "Taufik"
    })

    console.info(data);
    expect(data).toContain("Taufik");
});

test("Mustache Sections Not Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = mustache.render(helloTemplate, {});
    console.info(data);
    expect(data).not.toContain("Hello Person");
});

test("Mustache Sections Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = mustache.render(helloTemplate, {
        person: {
            name: "Taufik"
        }
    });
    console.info(data);
    expect(data).toContain("Hello Person Taufik");
});


test("Sections Data", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = mustache.render(helloTemplate, {
        person: {
            name: "Eko"
        }
    });
    console.info(data);
    expect(data).toContain("Hello Person Eko!");
});

test("Inverted Sections", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = mustache.render(helloTemplate, {});
    console.info(data);
    expect(data).toContain("Hello Guest");
});