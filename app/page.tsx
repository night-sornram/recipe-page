import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full font-outfit md:py-20 bg-custom-400 flex justify-center items-center">
      <div className=" space-y-5 md:space-y-10  w-[800px] md:p-10 rounded-xl bg-white flex flex-col">
        <div>
          <Image
          src={"/images/image-omelette.jpeg"}
          width={1312}
          height={600}
          className=" rounded-xl"
          alt="omelette"/>
        </div>
        <div className=" md:p-0 p-10 space-y-7">
          <div className=" text-5xl font-serif">
            Simple Omelette Recipe
          </div>
          <div className="  text-custom-700">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </div>
        </div>
        <div className="  md:px-0 px-7">
          <div className=" space-y-3 p-7 bg-fuchsia-50 rounded-xl">
            <div className=" text-custom-200 font-bold  text-xl">
              Preparation time 
            </div>
            <ul className=" marker:text-custom-200 list-disc list-inside">
              <li className=" text-custom-700">
                <span className=" font-bold">Total</span>: Approximately 10 minutes
              </li>
              <li className=" text-custom-700">
                <span className=" font-bold">Preparation</span>: 5 minutes
              </li>
              <li className=" text-custom-700">
                <span className=" font-bold">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
        </div>
        <div className=" md:p-0 p-10 flex space-y-5 flex-col">
          <div className=" text-3xl font-serif text-custom-100">Ingredients</div>
          <ul className=" marker:text-custom-100 text-custom-700 list-inside list-disc">
            <li>
              2-3 large eggs
            </li>
            <li>
              Salt, to taste 
            </li>
            <li>
              Pepper, to taste 
            </li>
            <li>
              1 tablespoon of butter or oil 
            </li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs 
            </li>
          </ul>
        </div>
        <hr className=" h-[1px] border border-gray-300" />
        <div className=" md:p-0 p-10 flex space-y-5 flex-col">
          <div className=" text-3xl font-serif text-custom-100"> Instructions</div>
          <ul className=" space-y-3 marker:text-custom-100 text-custom-700 list-inside list-decimal">
            <li className=" text-custom-600 ">
              <span className=" font-bold">Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li className=" text-custom-600">
              <span className=" font-bold">Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li className=" text-custom-600">
              <span className=" font-bold">Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface
            </li>
            <li className=" text-custom-600">
              <span className=" font-bold">Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li className=" text-custom-600">
              <span className=" font-bold">Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li className=" text-custom-600">
              <span className=" font-bold">Enjoy</span>: Serve hot, with additional salt and pepper if needed.
            </li>
          </ul>
        </div>
        <hr className=" h-[1px] border border-gray-300" />
        <div className=" md:p-0 p-10 flex space-y-5 flex-col">
          <div className=" text-3xl font-serif text-custom-100">Nutrition</div>
          <div className=" text-custom-700">
            The table below shows nutritional values per serving without the additional fillings. 
          </div>
          <div className=" space-y-3">
            <div className=" flex flex-row">
              <div className=" ml-10 text-custom-700 w-1/2">
                Calories
              </div>
              <div className=" text-custom-100 font-bold w-1/2">
                277kcal
              </div>
            </div>
            <hr className=" h-[1px]border border-gray-300" />
          </div>
          <div className=" space-y-3">
            <div className=" flex flex-row">
              <div className=" ml-10 text-custom-700 w-1/2">
                Carbs
              </div>
              <div className=" text-custom-100 font-bold w-1/2">
                0g
              </div>
            </div>
            <hr className=" h-[1px] border border-gray-300" />
          </div>
          <div className=" space-y-3">
            <div className=" flex flex-row">
              <div className=" ml-10 text-custom-700 w-1/2">
                Protein
              </div>
              <div className=" text-custom-100 font-bold w-1/2">
                20g
              </div>
            </div>
            <hr className=" h-[1px] border border-gray-300 " />
          </div>
          <div className=" space-y-3">
            <div className=" flex flex-row">
              <div className=" ml-10 text-custom-700 w-1/2">
                Fat
              </div>
              <div className=" text-custom-100 font-bold w-1/2">
                22g
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
    