require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  it("has a <h1> element", () => {
    const h1 = document.querySelector("h1");
    const hint = "Did you code an <h1>Tag</h1> in index.html?";

    expect(h1, hint).to.exist;
  });

  it("has a <p> element", () => {

    const p = document.querySelector("p");
    const hint = "Did you code a <p>Tag</p> in index.html?";

    expect(p, hint).to.exist;
  });

  describe("the <h1> element", () => {
    it('contains the text "My First HTML Element"', () => {
      const h1 = document.querySelector("h1");
      const hint =
        'Does your H1 have exactly "My First HTML Element" inside the opening and closing tag?';

      expect(h1, hint).to.contain.text("My First HTML Element");
    });
  });

  describe("the <p> element", () => {
    const p = document.querySelector("p");

    it('contains the text "The quick brown fox jumps over the lazy dog"', () => {
        const hint = 'Does your P have exactly "The quick brown fox jumps over the lazy dog" inside the opening and closing tag?'

        expect(p, hint).to.contain.text("The quick brown fox jumps over the lazy dog")
    })

    it('contains the id attribute "firstParagraph"', () => {
        const hint = 'Does your P have the id attribute value "firstPargraph"?'

        expect(p, hint).to.have.attr("id", "firstParagraph")
    })
  })
});