import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  slidesData = [
    {src: 'slide-1.jpg', activeClass: 'active', index: 0},
    {src: 'slide-2.jpg', activeClass: '', index: 1},
    {src: 'slide-3.jpg', activeClass: '', index: 2},
    {src: 'slide-4.jpg', activeClass: '', index: 3}
  ];

  campaignInfoArr = [
    {title: 'Campaign Organizer', subTitle: 'LR', desc: 'Living Routes'},
    {title: 'Beneficiary', subTitle: 'SH', desc: 'Sikkim Himalayan Academy'}
  ];

  skip = 0;
  limit = 5;
  donationsArr = [
    {amount: 100, like: '2', name: 'Raman S', on: 'Thu Dec 03 2017 22:55:09 GMT+0530 (IST)', isShow: true},
    {amount: 200, like: '1', name: 'Molly', on: 'Thu Dec 06 2017 22:55:09 GMT+0530 (IST)', isShow: true},
    {amount: 78, like: '0', name: 'Shailendra S', on: 'Thu Dec 08 2017 22:55:09 GMT+0530 (IST)', isShow: true},
    {amount: 1000, like: '1', name: 'Nikhil D', on: 'Thu Dec 02 2017 22:55:09 GMT+0530 (IST)', isShow: true},
    {amount: 500, like: '0', name: 'Deepthi', on: 'Thu Dec 07 2017 22:55:09 GMT+0530 (IST)', isShow: true},
    {amount: 200, like: '2', name: 'Ram', on: 'Thu Dec 07 2011 22:55:09 GMT+0530 (IST)', isShow: false},

    {amount: 150, like: '2', name: 'Rahul M', on: 'Thu Dec 03 2017 22:55:09 GMT+0530 (IST)', isShow: false},
    {amount: 120, like: '1', name: 'Mani', on: 'Thu Dec 06 2017 22:55:09 GMT+0530 (IST)', isShow: false},
    {amount: 98, like: '0', name: 'Rakesh', on: 'Thu Dec 08 2017 22:55:09 GMT+0530 (IST)', isShow: false},
    {amount: 1400, like: '1', name: 'Nikhil Das', on: 'Thu Dec 02 2017 22:55:09 GMT+0530 (IST)', isShow: false},
    {amount: 5000, like: '0', name: 'Deepesh', on: 'Thu Dec 07 2017 22:55:09 GMT+0530 (IST)', isShow: false},
    {amount: 300, like: '2', name: 'Nirmal K', on: 'Thu Dec 07 2011 22:55:09 GMT+0530 (IST)', isShow: false},

    {amount: 140, like: '2', name: 'Aditya', on: 'Thu Dec 03 2017 22:55:09 GMT+0530 (IST)', isShow: false},
    {amount: 145, like: '1', name: 'Vinnu', on: 'Thu Dec 06 2017 22:55:09 GMT+0530 (IST)', isShow: false},
    {amount: 88, like: '0', name: 'Sharma', on: 'Thu Dec 08 2017 22:55:09 GMT+0530 (IST)', isShow: false}
  ];

  materialsUsedArr = [
    {title: 'Bricks', quantity: 50000, itemCost: 5},
    {title: 'Transport', quantity: 1, itemCost: 3000},
    {title: 'Cement Bags', quantity: 3, itemCost: 5000},
    {title: 'Stone for foundation', quantity: 3, itemCost: 2000},
    {title: 'Stone chips', quantity: 5, itemCost: 5000},
    {title: 'Hinges', quantity: 20, itemCost: 50},
    {title: 'Door metal fittings', quantity: 2, itemCost: 5000},
    {title: 'Door plywood', quantity: 2, itemCost: 3000},
    {title: 'PAINTING', quantity: 3, itemCost: 1000},
    {title: 'Metal primer', quantity: 1, itemCost: 3000},
    {title: 'Wood Primer', quantity: 1, itemCost: 3000},
    {title: 'FURNITURE SET', quantity: 30, itemCost: 1000},
    {title: 'White Board', quantity: 2, itemCost: 2000},
    {title: 'Metal primer', quantity: 1, itemCost: 3000},
    {title: 'Metal primer', quantity: 1, itemCost: 3000}
  ];

  updatesArr = [
    {
      index: 1,
      desc: `We have reached 41% of our campaign. Thanks a lot to the wonderful people who have contributed so far.  A little more to go and we will be halfway to our target. 
            Living Routes has already covered 13 states, 2 union territories and 7500 km! We are campaigning hard to help build a classroom for these little children.
            We're all geared up and headed to enter our 14th state on this expedition! Stay tuned for more updates!
            34 days left for the campaign!
            Do share and help spread the word`,
      imageSrc: '',
      createdOn: 'Fri Dec 08 2017 01:03:33 GMT+0530 (IST)'
    },
    {
      index: 2,
      desc: 'Zostel Dalhousie Team provided The Living Routes space to depict their vision via wall art and also let us put up the flyer for the campaign.',
      imageSrc: '/assets/images/updates/update-2.jpg',
      createdOn: 'Wed Nov 29 2017 00:00:00 GMT+0530 (IST)'
    },
    {
      index: 3,
      desc: 'The campaign has been featured! Thank you well wishers. Do continue to support us and spread the word!',
      imageSrc: '/assets/images/updates/update-3.jpg',
      createdOn: 'Mon Nov 20 2017 00:00:00 GMT+0530 (IST)'
    },
    {index: 4, desc: '', imageSrc: '/assets/images/updates/update-4.jpg', createdOn: 'Mon Nov 20 2017 00:00:00 GMT+0530 (IST)'},
    {
      index: 5,
      desc: 'We are overwhelmed by the support received by you guys. We have reached 40 odd percentage of our target but there is still a long way to go!',
      imageSrc: '/assets/images/updates/update-5.jpg',
      createdOn: 'Tue Oct 29 2017 00:00:00 GMT+0530 (IST)'
    },
    {
      index: 6,
      desc: 'We have been featured yet again. Thank you so much for all theof love and support. Help Sikkim Himalayan Academy that is doing such a great job of educating kids in remote area of West Sikkim build a classroom for grade one kids who currently do nott have a classroom ofof their own.',
      imageSrc: '/assets/images/updates/update-6.jpg',
      createdOn: 'Tue Oct 03 2017 00:00:00 GMT+0530 (IST)'
    },
  ];

  selectedUpdate = this.updatesArr[0];

  totalCostObj = {title: '', quantity: '-', itemCost: '-', totalCost: 0};
  getProcessedMaterialArr(arr) {
    let obj = {title: 'Total', quantity: '-', itemCost: '-', totalCost: 0};
    let totalCost = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i].totalCost = arr[i].quantity * arr[i].itemCost;
      totalCost += arr[i].totalCost;
    }
    obj.totalCost = totalCost;
    this.totalCostObj = obj;
    return arr;
  }

  getDonations(type) {
    if (type) {
      type === 'next' ? this.skip += this.limit : this.skip -= this.limit;
    }
    console.log(type, this.skip);
    for (let i = 0; i < this.donationsArr.length; i++) {
      i >= this.skip && i < (this.skip + this.limit) ? this.donationsArr[i].isShow = true : this.donationsArr[i].isShow = false;
    }
  }

  showDonations(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isShow) {
        tempArr.push(arr[i]);
      }
    }
    return tempArr;
  }

  sortFunction(arr, sortBy, order) {
    const sortFunctionHelper = function (a, b) {
      const type = typeof(a[sortBy]);
      if (type !== 'string' && a[sortBy] < b[sortBy] ||
          type === 'string' && a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
        return order === 'asc' ? -1 : 1;
      } else if (type !== 'string' && a[sortBy] > b[sortBy] ||
          type === 'string' && a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0
      }
      ;
    };
    return arr.sort(sortFunctionHelper);
  };

  sortDonations(prop) {
    this.donationsArr = this.sortFunction(this.donationsArr, prop, 'asc');
    this.skip = 0;
    this.getDonations('');
  }

  selectUpdate(item) {
    this.selectedUpdate = item;
  }

  // sort pipe code starts here
  selectedFieldPipe = 'title';

  setFieldNameSort(name) {
    if (this.selectedFieldPipe === name) {
      this.selectedFieldPipe = '-' + this.selectedFieldPipe;
    } else {
      this.selectedFieldPipe = name;
    }
  }

  // sort pipe code ends here
  MS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
  setHoursToZero(d){
    let date = new Date(d);
    return new Date(date.setHours(0, 0, 0, 0));
  };

  getDaysDiff(d1, d2){
    d1 = this.setHoursToZero(d1);
    d2 = this.setHoursToZero(d2);
    var diffInMS = d1.getTime() - d2.getTime();

    return (diffInMS)/this.MS_IN_ONE_DAY;
  };

  getDaysString(d) {
    let diff = this.getDaysDiff(new Date().getTime(), new Date(d).getTime());
    let daysStr = diff > 1 ? diff + ' days ago' : diff + ' day ago';
    return daysStr;
  }

  constructor() {
  }

  ngOnInit() {
    this.materialsUsedArr = this.getProcessedMaterialArr(this.materialsUsedArr);
    ($('.carousel') as any).carousel({
      interval: 3000
    });
  }

}
