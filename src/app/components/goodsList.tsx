'use client'
import { Good } from "../store/models/Goods";
import GoodItem from "./goodItem";

export default function GoodsList(props: any) {
    var items = props.items;
    // var dispatch = useDispatch();
    // var items = useSelector((state: any) => state.goods.items) as any;
    // var isLoading = useSelector((state: any) => state.goods.isPending);


    // function test() {
    //     console.log(state);
    // }

    return <ul className="goods-container__goods-list nostyle-list">
        {
            items.map((v: Good) =>
                <GoodItem key={v.id} imageSrc={v.image_url} title={v.title} description={v.description} price={v.price} ></GoodItem>
            )
        }

        {/* <GoodItem id={1} imageSrc={"asdf"} title="название" description={"DESCRIPTION"} price={11111} ></GoodItem>
            <GoodItem id={2} imageSrc={"asdf"} title="название" description={"DESCRIPTION"} price={11111} ></GoodItem>
            <GoodItem id={3} imageSrc={"asdf"} title="название" description={"DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTIONDESCRIPTION DESCRIPTION"} price={11111} ></GoodItem>
            <GoodItem id={4} imageSrc={"asdf"} title="название" description={"DESCRIPTION слово слово слово слово"} price={11111} ></GoodItem>
            <GoodItem id={5} imageSrc={"asdf"} title="название" description={"DESCRIPTION"} price={11111} ></GoodItem>
            <GoodItem id={6} imageSrc={"asdf"} title="название" description={"DESCRIPTION"} price={11111} ></GoodItem>
            <GoodItem id={7} imageSrc={"asdf"} title="название" description={"DESCRIPTION"} price={11111} ></GoodItem>
            <GoodItem id={8} imageSrc={"asdf"} title="название" description={"DESCRIPTION"} price={11111} ></GoodItem>
            <GoodItem id={9} imageSrc={"asdf"} title="название" description={"DESCRIPTION"} price={11111} ></GoodItem> */}

    </ul>
}