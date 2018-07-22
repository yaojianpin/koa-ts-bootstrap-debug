export default class ProductController {
    public static async getProduct(ctx) {
        await ctx.render('product');
        //await ctx.throw(500);
    }
}