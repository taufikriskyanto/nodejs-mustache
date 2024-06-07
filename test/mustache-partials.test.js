
import mustache from "mustache";
import fs from "fs/promises";

test("Partials", async () => {
    const contentTemplate = await fs.readFile("./templates/content.mustache")
        .then(data => data.toString());
    const headerTemplate = await fs.readFile("./templates/header.mustache")
        .then(data => data.toString());
    const footerTemplate = await fs.readFile("./templates/footer.mustache")
        .then(data => data.toString());

    const data = mustache.render(contentTemplate, {
        title: "Eko",
        content: "Belajar Mustache JS"
    }, {
        header: headerTemplate,
        footer: footerTemplate
    });

    console.info(data);
    expect(data).toContain("Eko");
    expect(data).toContain("Belajar Mustache JS");
    expect(data).toContain("Powered by Programmer Zaman Now");
});