import mustache from "mustache";
import fs from "fs/promises";



test("Functions", async () => {
    const parameter = {
        name: "Taufik",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    }

    const data = mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
    console.info(data);
    expect(data).toBe("Hello TAUFIK");
});