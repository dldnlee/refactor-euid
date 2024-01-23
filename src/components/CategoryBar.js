import Category from "./Category";

export default function CategoryBar() {
  return (
    <ul className="flex bg-primary">
      <Category text="전체" />
      <Category text="판매" />
      <Category text="같이해요" />
      <Category text="전체" />
    </ul>
  )
}