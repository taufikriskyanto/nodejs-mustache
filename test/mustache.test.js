import mustache from "mustache";


test("Menggunakan Mustache", ()=>{
    const data = mustache.render("Hello, {{name}}", {name:"Taufik"})
    expect(data).toBe("Hello, Taufik")
})

test("Menggunakan Mustache Cache", () => {
    mustache.parse("Hello {{name}}");

    const data = mustache.render("Hello {{name}}", {name: "Taufik"});
    // Hello Eko
    expect(data).toBe("Hello Taufik");
});


test("Tags", () => {
    const data = mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
        name: "Eko",
        hobby: "<b>Programming</b>"
    });
    // Hello Eko
    console.log(data);
    expect(data).toBe("Hello Eko, my hobby is <b>Programming</b>");
});

test("Nested Object", () => {
    const data = mustache.render("Hello {{person.name}}", {
        person: {
            name: "Eko"
        }
    });
    // Hello Eko
    expect(data).toBe("Hello Eko");
});