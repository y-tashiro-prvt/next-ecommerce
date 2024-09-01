// "use client";

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { Suspense, useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

export const dynamic = 'force-dynamic';



const HomePage = async () => {

  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // console.log("Client ID:", process.env.NEXT_PUBLIC_WIX_CLIENT_ID);

  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await wixClient.products.queryProducts().find();
  //       console.log("API Response:", res); // レスポンスを確認
  //     } catch (error) {
  //       console.error("Error fetching products:", error); // エラーハンドリングを追加
  //     }
  //   };

  //   getProducts();
  // }, [wixClient]);

    // TEST (FETCHING ON THE SERVER COMPONENT)

//   const wixClient = await wixClientServer();

//   const res = await wixClient.products.queryProducts().find();

//   console.log(process.env.FEATURED_PRODUCTS_CATEGORY_ID!)

//   console.log(res);
//   try {
//     // API呼び出し
// } catch (error) {
//     console.error(error); // エラーの詳細を表示
// }



  
  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-3xl font-bold">クーポン対象の人気アイテム</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-3xl font-bold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">カテゴリーから探す</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-3xl font-bold">イチ押しの秋新作ファッションアイテム</h1>
        {/* <ProductList categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID!} /> */}
      </div>
    </div>
  )
}

export default HomePage