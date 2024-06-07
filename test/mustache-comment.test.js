import mustache from "mustache";
import fs from "fs/promises";



test("Comment", async () => {
    const helloTemplate = await fs.readFile("./templates/comment.mustache")
        .then(data => data.toString());

    const data = mustache.render(helloTemplate, {
        title: "Eko"
    });
    console.info(data);
    expect(data).toContain("Eko");
    expect(data).not.toContain("Ini Komentar");
});