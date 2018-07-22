export default class HomeController {
    public static async getHome(ctx: any) {
        // await ctx.throw(500, 'a');
        await ctx.render('index', {
            title: 'demo',
            carousel: [
                { title: 'image 1', imageUrl: '/static/images/1.jpg', active: true },
                { title: 'image 2', imageUrl: '/static/images/2.jpg' },
            ],
            products: [
                { title: 'title 1', imageUrl: '/static/images/1.jpg', desc: 'desc 1' },
                { title: 'title 2', imageUrl: '/static/images/2.jpg', desc: 'desc 2'},
                { title: 'title 3', imageUrl: '/static/images/2.jpg', desc: 'desc 3'},
            ],
            copyright: '@2018'
        });
    }
}