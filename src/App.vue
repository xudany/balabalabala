<template lang="pug">
  div(id="app")
    el-container(style="border: 1px solid #eee")
      el-aside(style="background-color: rgb(238, 241, 246)")
        el-menu(background-color="#424242" text-color="#fff" active-text-color="#ffd04b" router)
          el-menu-item-group(v-for="item in items" v-bind:key="item.group")
            template(slot="title") {{item.header}}
            el-submenu(:index="item.group")
              template(slot="title")
                i(class="el-icon-menu") {{item.title}}
              el-menu-item(v-for="subitem in item.items" :index="subitem.href" v-bind:key="subitem.title") {{subitem.title}}

      el-container
        el-header(style="text-align: right; font-size: 12px background-color: rgb(66,66,66)" )
          span XXX &nbsp;&nbsp;&nbsp;欢迎你━(*｀∀´*)ノ亻****
          el-button(type="text") 退出

        el-main
          router-view
  </div>
</template>

<!--<script>
// export default {
//   name: 'app'
// }
// </script>
-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50
}
</style>


<script>
  export default {
    name: 'app',
    // name: 'navigation',
    // computed: {
    //   drawer: {
    //     get () {
    //       return this.$store.state.drawer
    //     },
    //     set (val) {
    //       this.$store.commit('drawer', val)
    //     }
    //   }
    // },
    // methods: {
    // },
    data () {
      return {
        mini: false,
        right: null,
        items: [
          {
            index: 1,
            header: '行政管理',
            title: '开店服务',
            action: 'bookmark',
            group: 'admin/business',
            href: '/admin/business/merchant/list',
            items: [
              {
                href: '/admin/business/merchant/list',
                title: '商家申请列表'
              },
              {
                href: '/admin/business/store/list',
                title: '店铺申请列表'
              }
            ]
          },
          {
            index: 2,
            title: '商家管理',
            action: 'bookmark',
            group: 'admin/merchant',
            items: [
              {
                href: '/admin/merchant/list',
                title: '商家列表'
              },
              {
                href: '/admin/merchant/group',
                title: '商家组'
              },
              {
                href: '/admin/merchant/circle',
                title: '商家圈'
              }
            ]
          },
          {
            index: 3,
            title: '店铺管理',
            action: 'bookmark',
            group: 'admin/store',
            items: [
              {
                href: '/admin/store/list',
                title: '店铺列表'
              },
              {
                href: '/admin/store/compact',
                title: '续签合同列表'
              }
            ]
          },
          {
            header: '物流管理',
            title: '配送管理',
            action: 'bookmark',
            group: 'express/delivery',
            items: [
              {
                href: '/express/delivery/setting',
                title: '平台配送设置'
              },
              {
                href: '/express/delivery/map',
                title: '地图管理'
              },
              {
                href: '/express/delivery/distribution',
                title: '位置分布'
              },
              {
                href: '/express/delivery/node',
                title: '物流节点设置'
              }
            ]
          },
          {
            title: '订单管理',
            action: 'bookmark',
            group: 'express/order',
            items: [
              {
                href: '/express/order/list',
                title: '配送订单'
              },
              {
                href: '/express/order/log',
                title: '催单记录'
              },
              {
                href: '/express/order/setting',
                title: '催单设置'
              },
              {
                href: '/express/order/comment',
                title: '配送评价'
              }
            ]
          },
          {
            title: '人员管理',
            action: 'bookmark',
            group: 'express/role',
            items: [
              {
                href: '/express/role/errand',
                title: '跑腿员'
              },
              {
                href: '/express/role/courier',
                title: '配送员'
              }
            ]
          },
          {
            title: '统计管理',
            action: 'bookmark',
            group: 'express/statistics',
            items: [
              {
                href: '/express/statistics/platform',
                title: '平台配送'
              },
              {
                href: '/express/statistics/coupon',
                title: '自提卷码'
              }
            ]
          },
          {
            header: '用户管理',
            title: '角色管理',
            action: 'bookmark',
            group: 'users/roles',
            items: [
              {
                href: '/users/roles/list',
                title: '角色列表'
              },
              {
                href: '/users/roles/log',
                title: '管理日志'
              }
            ]
          },
          {
            title: '内部用户',
            action: 'bookmark',
            group: 'users/inside',
            items: [
              {
                href: '/users/inside/list',
                title: '用户列表'
              },
              {
                href: '/users/inside/log',
                title: '管理日志'
              }
            ]
          },
          {
            title: '外部用户',
            action: 'bookmark',
            group: 'users/outside',
            items: [
              {
                href: '/users/outside/list',
                title: '用户列表'
              },
              {
                href: '/users/outside/log',
                title: '管理日志'
              }
            ]
          },
          {
            header: '营销管理',
            title: '积分系统',
            action: 'bookmark',
            group: 'marketing/points',
            items: [
              {
                href: '/marketing/points/set',
                title: '积分设置'
              },
              {
                href: '/marketing/points/log',
                title: '积分记录'
              }
            ]
          },
          {
            title: '店铺活动',
            action: 'bookmark',
            group: 'marketing/shop',
            href: '/marketing/shop/activity'
          },
          {
            title: '平台活动',
            action: 'bookmark',
            group: 'marketing/platform',
            items: [
              {
                href: '/marketing/platform/subsidy',
                title: '补贴活动'
              },
              {
                href: '/marketing/platform/decrease',
                title: '满减活动'
              },
              {
                href: '/marketing/platform/coupon',
                title: '优惠券/代金券'
              },
              {
                href: '/marketing/platform/review',
                title: '活动报名审核'
              },
              {
                href: '/marketing/platform/centralit',
                title: '领券中心'
              },
              {
                href: '/marketing/platform/setting',
                title: '送券设置'
              }
            ]
          },
          {
            title: '推广活动',
            action: 'bookmark',
            group: 'marketing/promote',
            items: [
              {
                href: '/marketing/promote/setting',
                title: '推广设置'
              },
              {
                href: '/marketing/promote/administration',
                title: '推广员管理'
              },
              {
                href: '/marketing/promote/review',
                title: '推广员审核'
              }
            ]
          },
          {
            title: '降价拍活动',
            action: 'bookmark',
            group: '/marketing/reduce',
            href: '/marketing/reduce/activity'
          },
          {
            title: '二维码活动',
            action: 'bookmark',
            group: '/marketing/code',
            href: '/marketing/code/activity'
          },

          {
            header: '售后管理',
            title: '售后节点配置',
            action: 'bookmark',
            group: 'after/node'
          },
          {
            title: '售后单列表',
            action: 'bookmark',
            group: 'after/list',
            items: [
              {
                href: '/after/list/intervention',
                title: '介入管理'
              },
              {
                href: '/after/list/manage',
                title: '售后管理'
              }
            ]
          },

          {
            header: '资讯管理',
            title: '第三方媒体管理',
            action: 'bookmark',
            group: 'info/media',
            items: [
              {
                href: '/info/media/list',
                title: '第三方媒体列表'
              },
              {
                href: '/info/media/blocked',
                title: '封禁/解封'
              },
              {
                href: '/info/media/rank',
                title: '粉丝排行'
              }
            ]
          },
          {
            title: '栏目管理',
            action: 'bookmark',
            group: 'info/column',
            items: [
              {
                href: '/info/column',
                title: '栏目列表'
              }
            ]
          },
          {
            title: '文章管理',
            action: 'bookmark',
            group: 'info/article',
            items: [
              {
                href: '/info/article/review',
                title: '文章审核'
              },
              {
                href: '/info/article/list',
                title: '文章列表'
              },
              {
                href: '/info/article/report',
                title: '举报审核'
              },
              {
                href: '/info/article/configure',
                title: '文章排序配置'
              }
            ]
          },
          {
            title: '统计管理',
            action: 'bookmark',
            group: '/info/statistic',
            items: [
              {
                href: '/info/statistic/article',
                title: '文章统计'
              },
              {
                href: '/info/statistic/social',
                title: '社会统计'
              }
            ]
          },

          {
            header: '财务管理',
            title: '商家情况',
            action: 'bookmark',
            group: 'finance',
            items: [
              {
                href: '/finance/merchant/list',
                title: '商家详情'
              },
              {
                href: '/finance/store/deposit',
                title: '店铺保证金'
              }
            ]
          },

          {
            header: '通用功能',
            title: '商品管理',
            action: 'bookmark',
            group: 'currency/goods',
            items: [
              {
                href: '/currency/goods/list/on',
                title: '在售商品'
              },
              {
                href: '/currency/goods/list/offline',
                title: '下架商品'
              }
            ]
          },
          {
            title: '标签管理',
            action: 'bookmark',
            group: 'currency/label',
            items: [
              {
                href: '/currency/label/list',
                title: '标签'
              },
              {
                href: '/currency/label/group/list',
                title: '标签组'
              }
            ]
          },
          {
            title: '分类管理',
            action: 'bookmark',
            group: 'category',
            items: [
              {
                href: '/category/goods',
                title: '商品分类'
              },
              {
                href: '/category/store',
                title: '店铺分类'
              },
              {
                href: '/category/meta',
                title: '属性分类'
              },
              {
                href: '/category/brand',
                title: '品牌分类'
              }
            ]
          },
          {
            title: '订单管理',
            action: 'bookmark',
            group: 'currency/order',
            items: [
              {
                href: '/currency/order/trade',
                title: '交易订单列表'
              },
              {
                href: '/currency/order/cancel',
                title: '取消订单列表'
              },
              {
                href: '/currency/order/abnormity',
                title: '异常订单列表'
              },
              {
                href: '/currency/order/payment',
                title: '支付单列表'
              },
              {
                href: '/currency/order/set',
                title: '订单设置'
              }
            ]
          },

          {
            header: '购物搜索',
            title: '搜索管理',
            action: 'bookmark',
            group: 'currency/search',
            items: [
              {
                href: '/currency/search/shopping',
                title: '购物搜索'
              },
              {
                href: '/currency/search/information',
                title: '资讯搜索'
              }
            ]
          }
        ]
      }
    }
  }
</script>
