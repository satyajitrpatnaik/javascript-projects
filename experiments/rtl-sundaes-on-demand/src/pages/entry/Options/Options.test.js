import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "./Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // conform alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(2);

  // conform alt text of images
  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toEqual(["M&Ms topping", "Hot fudge topping"]);
});
