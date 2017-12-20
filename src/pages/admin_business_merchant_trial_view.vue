<template lang="pug">
  div
    span 初审
</template>

<script>
  export default {
    data () {
      return {
        tabledata: [
          {
            account: 'account',
            creatTime: '2017-12-17',
            status: 'enable',
            operator: 'admin'
          }
        ],
        activeName: '1',
        datapicker: '',
        select: '',
        input1: '',
        items: [
          {
            lable: 'label',
            value: 'values'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
