import { stringify } from 'qs';
import request from '../utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice.json');
}

export async function queryActivities() {
  return request('/api/activities.json');
}

export async function queryRule() {
  return request('/api/rule.json');
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm() {
  return request('/api/forms.json');
}

export async function fakeChartData() {
  return {
    visitData: [
      { x: '2018-04-03', y: 7 },
      { x: '2018-04-04', y: 5 },
      { x: '2018-04-05', y: 4 },
      { x: '2018-04-06', y: 2 },
      { x: '2018-04-07', y: 4 },
      { x: '2018-04-08', y: 7 },
      { x: '2018-04-09', y: 5 },
      { x: '2018-04-10', y: 6 },
      { x: '2018-04-11', y: 5 },
      { x: '2018-04-12', y: 9 },
      { x: '2018-04-13', y: 6 },
      { x: '2018-04-14', y: 3 },
      { x: '2018-04-15', y: 1 },
      { x: '2018-04-16', y: 5 },
      { x: '2018-04-17', y: 3 },
      { x: '2018-04-18', y: 6 },
      { x: '2018-04-19', y: 5 },
    ],
    visitData2: [
      { x: '2018-04-03', y: 1 },
      { x: '2018-04-04', y: 6 },
      { x: '2018-04-05', y: 4 },
      { x: '2018-04-06', y: 8 },
      { x: '2018-04-07', y: 3 },
      { x: '2018-04-08', y: 7 },
      { x: '2018-04-09', y: 2 },
    ],
    salesData: [
      { x: '1月', y: 383 },
      { x: '2月', y: 419 },
      { x: '3月', y: 892 },
      { x: '4月', y: 785 },
      { x: '5月', y: 1172 },
      { x: '6月', y: 518 },
      { x: '7月', y: 375 },
      { x: '8月', y: 1156 },
      { x: '9月', y: 808 },
      { x: '10月', y: 697 },
      { x: '11月', y: 216 },
      { x: '12月', y: 1019 },
    ],
    searchData: [
      { index: 1, keyword: '搜索关键词-0', count: 65, range: 98, status: 1 },
      { index: 2, keyword: '搜索关键词-1', count: 318, range: 88, status: 1 },
      { index: 3, keyword: '搜索关键词-2', count: 155, range: 14, status: 0 },
      { index: 4, keyword: '搜索关键词-3', count: 754, range: 5, status: 1 },
      { index: 5, keyword: '搜索关键词-4', count: 149, range: 51, status: 1 },
      { index: 6, keyword: '搜索关键词-5', count: 533, range: 78, status: 1 },
      { index: 7, keyword: '搜索关键词-6', count: 397, range: 10, status: 0 },
      { index: 8, keyword: '搜索关键词-7', count: 608, range: 24, status: 0 },
      { index: 9, keyword: '搜索关键词-8', count: 636, range: 36, status: 0 },
      { index: 10, keyword: '搜索关键词-9', count: 913, range: 99, status: 0 },
      { index: 11, keyword: '搜索关键词-10', count: 101, range: 59, status: 1 },
      { index: 12, keyword: '搜索关键词-11', count: 213, range: 61, status: 0 },
      { index: 13, keyword: '搜索关键词-12', count: 275, range: 18, status: 1 },
      { index: 14, keyword: '搜索关键词-13', count: 631, range: 54, status: 1 },
      { index: 15, keyword: '搜索关键词-14', count: 870, range: 24, status: 0 },
      { index: 16, keyword: '搜索关键词-15', count: 184, range: 68, status: 1 },
      { index: 17, keyword: '搜索关键词-16', count: 39, range: 92, status: 1 },
      { index: 18, keyword: '搜索关键词-17', count: 379, range: 66, status: 1 },
      { index: 19, keyword: '搜索关键词-18', count: 547, range: 31, status: 1 },
      { index: 20, keyword: '搜索关键词-19', count: 490, range: 33, status: 0 },
      { index: 21, keyword: '搜索关键词-20', count: 197, range: 88, status: 1 },
      { index: 22, keyword: '搜索关键词-21', count: 645, range: 67, status: 0 },
      { index: 23, keyword: '搜索关键词-22', count: 199, range: 0, status: 0 },
      { index: 24, keyword: '搜索关键词-23', count: 762, range: 38, status: 0 },
      { index: 25, keyword: '搜索关键词-24', count: 777, range: 33, status: 0 },
      { index: 26, keyword: '搜索关键词-25', count: 441, range: 49, status: 1 },
      { index: 27, keyword: '搜索关键词-26', count: 174, range: 49, status: 0 },
      { index: 28, keyword: '搜索关键词-27', count: 218, range: 94, status: 0 },
      { index: 29, keyword: '搜索关键词-28', count: 459, range: 12, status: 1 },
      { index: 30, keyword: '搜索关键词-29', count: 389, range: 83, status: 1 },
      { index: 31, keyword: '搜索关键词-30', count: 900, range: 15, status: 1 },
      { index: 32, keyword: '搜索关键词-31', count: 266, range: 33, status: 1 },
      { index: 33, keyword: '搜索关键词-32', count: 219, range: 87, status: 1 },
      { index: 34, keyword: '搜索关键词-33', count: 290, range: 47, status: 0 },
      { index: 35, keyword: '搜索关键词-34', count: 354, range: 94, status: 0 },
      { index: 36, keyword: '搜索关键词-35', count: 316, range: 63, status: 1 },
      { index: 37, keyword: '搜索关键词-36', count: 561, range: 43, status: 0 },
      { index: 38, keyword: '搜索关键词-37', count: 78, range: 49, status: 1 },
      { index: 39, keyword: '搜索关键词-38', count: 861, range: 87, status: 1 },
      { index: 40, keyword: '搜索关键词-39', count: 108, range: 5, status: 0 },
      { index: 41, keyword: '搜索关键词-40', count: 384, range: 38, status: 0 },
      { index: 42, keyword: '搜索关键词-41', count: 762, range: 68, status: 0 },
      { index: 43, keyword: '搜索关键词-42', count: 202, range: 18, status: 0 },
      { index: 44, keyword: '搜索关键词-43', count: 481, range: 87, status: 1 },
      { index: 45, keyword: '搜索关键词-44', count: 259, range: 94, status: 0 },
      { index: 46, keyword: '搜索关键词-45', count: 560, range: 68, status: 1 },
      { index: 47, keyword: '搜索关键词-46', count: 498, range: 44, status: 1 },
      { index: 48, keyword: '搜索关键词-47', count: 948, range: 61, status: 0 },
      { index: 49, keyword: '搜索关键词-48', count: 412, range: 99, status: 0 },
      { index: 50, keyword: '搜索关键词-49', count: 704, range: 88, status: 1 },
    ],
    offlineData: [
      { name: '门店', cvr: 0.2 },
      { name: '门店', cvr: 0.7 },
      { name: '门店', cvr: 0.2 },
      { name: '门店', cvr: 0.2 },
      { name: '门店', cvr: 0.9 },
      { name: '门店', cvr: 0.5 },
      { name: '门店', cvr: 0.6 },
      { name: '门店', cvr: 0.4 },
      { name: '门店', cvr: 0.4 },
      { name: '门店', cvr: 0.8 },
    ],
    offlineChartData: [
      { x: 1522770099658, y1: 77, y2: 107 },
      { x: 1522771899658, y1: 98, y2: 70 },
      { x: 1522773699658, y1: 62, y2: 60 },
      { x: 1522775499658, y1: 105, y2: 10 },
      { x: 1522779099658, y1: 34, y2: 100 },
      { x: 1522780899658, y1: 17, y2: 71 },
      { x: 1522782699658, y1: 103, y2: 26 },
      { x: 1522784499658, y1: 100, y2: 45 },
      { x: 1522786299658, y1: 14, y2: 69 },
      { x: 1522788099658, y1: 76, y2: 93 },
      { x: 1522789899658, y1: 71, y2: 97 },
      { x: 1522791699658, y1: 57, y2: 21 },
      { x: 1522793499658, y1: 24, y2: 46 },
      { x: 1522795299658, y1: 83, y2: 90 },
      { x: 1522797099658, y1: 67, y2: 63 },
      { x: 1522798899658, y1: 93, y2: 93 },
      { x: 1522800699658, y1: 20, y2: 87 },
      { x: 1522802499658, y1: 97, y2: 12 },
      { x: 1522804299658, y1: 10, y2: 77 },
    ],
    salesTypeData: [
      { x: '家用电器', y: 4544 },
      { x: '食用酒水', y: 3321 },
      { x: '个护健康', y: 3113 },
      { x: '服饰箱包', y: 2341 },
      { x: '母婴产品', y: 1231 },
      { x: '其他', y: 1231 },
    ],
    salesTypeDataOnline: [
      { x: '家用电器', y: 244 },
      { x: '食用酒水', y: 321 },
      { x: '个护健康', y: 311 },
      { x: '服饰箱包', y: 41 },
      { x: '母婴产品', y: 121 },
      { x: '其他', y: 111 },
    ],
    salesTypeDataOffline: [
      { x: '家用电器', y: 99 },
      { x: '个护健康', y: 188 },
      { x: '服饰箱包', y: 344 },
      { x: '母婴产品', y: 255 },
      { x: '其他', y: 65 },
    ],
    radarData: [
      { name: '个人', label: '引用', value: 10 },
      { name: '个人', label: '口碑', value: 8 },
      { name: '个人', label: '产量', value: 4 },
      { name: '个人', label: '贡献', value: 5 },
      { name: '个人', label: '热度', value: 7 },
      { name: '团队', label: '引用', value: 3 },
      { name: '团队', label: '口碑', value: 9 },
      { name: '团队', label: '产量', value: 6 },
      { name: '团队', label: '贡献', value: 3 },
      { name: '团队', label: '热度', value: 1 },
      { name: '部门', label: '引用', value: 4 },
      { name: '部门', label: '口碑', value: 1 },
      { name: '部门', label: '产量', value: 6 },
      { name: '部门', label: '贡献', value: 5 },
      { name: '部门', label: '热度', value: 7 },
    ],
  };
}

export async function queryTags() {
  return {
    list: [
      { name: '舟山市', value: 2, type: 1 },
      { name: '海外', value: 87, type: 0 },
      { name: '三明市', value: 35, type: 1 },
      { name: '郴州市', value: 12, type: 2 },
      { name: '抚顺市', value: 58, type: 1 },
      { name: '海东市', value: 94, type: 1 },
      { name: '鄂州市', value: 10, type: 2 },
      { name: '大理白族自治州', value: 76, type: 0 },
      { name: '雅安市', value: 93, type: 1 },
      { name: '龙岩市', value: 72, type: 0 },
      { name: '三亚市', value: 5, type: 1 },
      { name: '九龙', value: 51, type: 1 },
      { name: '北京市', value: 63, type: 1 },
      { name: '鸡西市', value: 94, type: 1 },
      { name: '三亚市', value: 43, type: 2 },
      { name: '临沂市', value: 46, type: 1 },
      { name: '伊犁哈萨克自治州', value: 58, type: 2 },
      { name: '玉树藏族自治州', value: 10, type: 1 },
      { name: '西安市', value: 58, type: 0 },
      { name: '九龙', value: 83, type: 1 },
      { name: '惠州市', value: 37, type: 2 },
      { name: '阿克苏地区', value: 55, type: 0 },
      { name: '芜湖市', value: 59, type: 2 },
      { name: '平凉市', value: 62, type: 1 },
      { name: '内江市', value: 30, type: 1 },
      { name: '山南地区', value: 59, type: 1 },
      { name: '丽江市', value: 99, type: 2 },
      { name: '黔东南苗族侗族自治州', value: 92, type: 0 },
      { name: '周口市', value: 73, type: 0 },
      { name: '株洲市', value: 84, type: 1 },
      { name: '抚州市', value: 34, type: 1 },
      { name: '六盘水市', value: 16, type: 1 },
      { name: '驻马店市', value: 97, type: 0 },
      { name: '天津市', value: 58, type: 1 },
      { name: '兴安盟', value: 90, type: 1 },
      { name: '哈尔滨市', value: 23, type: 1 },
      { name: '长治市', value: 87, type: 1 },
      { name: '贺州市', value: 3, type: 0 },
      { name: '上海市', value: 4, type: 1 },
      { name: '九龙', value: 52, type: 1 },
      { name: '离岛', value: 10, type: 2 },
      { name: '桃园县', value: 70, type: 2 },
      { name: '周口市', value: 48, type: 2 },
      { name: '咸宁市', value: 56, type: 0 },
      { name: '漳州市', value: 11, type: 0 },
      { name: '陇南市', value: 38, type: 1 },
      { name: '兴安盟', value: 79, type: 2 },
      { name: '邯郸市', value: 8, type: 2 },
      { name: '绍兴市', value: 4, type: 0 },
      { name: '商洛市', value: 84, type: 1 },
      { name: '澳门半岛', value: 21, type: 1 },
      { name: '渭南市', value: 69, type: 1 },
      { name: '云林县', value: 37, type: 1 },
      { name: '上海市', value: 56, type: 0 },
      { name: '运城市', value: 7, type: 2 },
      { name: '珠海市', value: 62, type: 1 },
      { name: '湖州市', value: 19, type: 1 },
      { name: '廊坊市', value: 59, type: 2 },
      { name: '安顺市', value: 11, type: 1 },
      { name: '锦州市', value: 15, type: 1 },
      { name: '咸阳市', value: 3, type: 2 },
      { name: '新北市', value: 59, type: 0 },
      { name: '七台河市', value: 9, type: 1 },
      { name: '中卫市', value: 72, type: 0 },
      { name: '淮安市', value: 69, type: 2 },
      { name: '海西蒙古族藏族自治州', value: 60, type: 0 },
      { name: '宿州市', value: 73, type: 1 },
      { name: '重庆市', value: 54, type: 0 },
      { name: '山南地区', value: 23, type: 1 },
      { name: '和田地区', value: 62, type: 0 },
      { name: '金昌市', value: 54, type: 2 },
      { name: '聊城市', value: 48, type: 1 },
      { name: '包头市', value: 20, type: 1 },
      { name: '济宁市', value: 18, type: 1 },
      { name: '雅安市', value: 39, type: 1 },
      { name: '通辽市', value: 84, type: 1 },
      { name: '鹰潭市', value: 84, type: 0 },
      { name: '嘉义市', value: 41, type: 1 },
      { name: '克拉玛依市', value: 12, type: 2 },
      { name: '离岛', value: 59, type: 0 },
      { name: '天津市', value: 12, type: 2 },
      { name: '佛山市', value: 60, type: 1 },
      { name: '兴安盟', value: 12, type: 1 },
      { name: '三明市', value: 43, type: 1 },
      { name: '离岛', value: 93, type: 1 },
      { name: '烟台市', value: 90, type: 1 },
      { name: '海外', value: 47, type: 2 },
      { name: '长沙市', value: 16, type: 0 },
      { name: '三亚市', value: 13, type: 0 },
      { name: '贺州市', value: 9, type: 1 },
      { name: '赣州市', value: 40, type: 0 },
      { name: '自贡市', value: 18, type: 1 },
      { name: '乌海市', value: 35, type: 1 },
      { name: '陇南市', value: 19, type: 1 },
      { name: '伊犁哈萨克自治州', value: 38, type: 0 },
      { name: '衡水市', value: 86, type: 2 },
      { name: '大庆市', value: 89, type: 1 },
      { name: '榆林市', value: 76, type: 1 },
      { name: '上海市', value: 34, type: 1 },
      { name: '上海市', value: 14, type: 2 },
    ],
  };
}

export async function queryBasicProfile() {
  return request('/api/profile/basic.json');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced.json');
}

export async function queryFakeList() {
  return request('/api/fake_list.json');
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices.json');
}
