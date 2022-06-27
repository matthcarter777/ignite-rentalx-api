import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }

  index(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);

    return category || undefined;
  }
}

export { CategoryRepository };
