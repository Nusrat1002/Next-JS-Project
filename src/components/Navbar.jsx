import React from "react";
import data from "$/fake.json";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 py-5">
      <ul className="flex gap-5 justify-center items-center">
        {data.map((category) => (
          <li
            key={category.slug}
            className="text-red-500">
            <Link href={`/${category.slug}`}>{category.category}</Link>
            {category?.subcategories.length && (
              <ul>
                {category.subcategories.map((subcategories) => (
                  <li key={subcategories.slug} className="text-black">
                    <Link href={`/${subcategories.slug}`}>
                      {subcategories.name}
                    </Link>
                    {subcategories?.subcategories?.length && (
                      <ul>
                        {subcategories.subcategories.map((subcategories) => (
                          <li key={subcategories.slug} className=" text-yellow-500">
                            <Link href={`/${subcategories.slug}`}>
                              {subcategories.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
