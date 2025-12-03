let str = '78847-119454,636-933,7143759788-7143793713,9960235-10043487,44480-68595,23468-43311,89-123,785189-1014654,3829443354-3829647366,647009-692765,2-20,30-42,120909-197026,5477469-5677783,9191900808-9191943802,1045643-1169377,46347154-46441299,2349460-2379599,719196-779497,483556-641804,265244-450847,210541-230207,195-275,75702340-75883143,58-84,2152-3237,3367-5895,1552-2029,9575-13844,6048-8966,419388311-419470147,936-1409,9292901468-9292987321';


class DimmaDrome{
  constructor(str){
    this.ranges = str.split(',');
    this.dromics = [];
  };

  parseRange(range) {return range.split('-').map(Number);}

  checkRange(low,high){
    for (let i = low ; i <= high ; i++){
      this.checkDrome(i);
    }
  };

  checkDrome(num){
    // num = num.toString();
    // if (num.length <= 1) return true;
    // for (let i = 1; i <= num.length / 2; i++){
    //   const seg = num.slice(0,i);
    //   let segWorks = true;
    //   for (let j = i, k = seg.length ; j + k <= num.length ; j += k){
    //     if (num.length % seg.length){
    //       segWorks = false;
    //       break;
    //     }
    //     const nextSeg = num.slice(j, j+k)
    //     // console.log({seg,nextSeg,num,i,j,k}, this.dromics)
    //     if (seg !== nextSeg) {
    //       segWorks = false
    //       break;
    //     };
    //   }
    //   if (segWorks) {
    //     this.dromics.push(+num);
    //     break;
    //   }
    // }
    num = num.toString();
    if (num.length % 2) return;
    const mid = Math.floor(num.length / 2);
    const front = num.slice(0,mid);
    const back = num.slice(mid);
    if (front === back) this.dromics.push(+num);
  };

  getAndSumDromes(){
    this.ranges.forEach(range => {
      const [l,h] = this.parseRange(range);
      this.checkRange(l,h);
    })
    console.log(this.dromics);
    return this.dromics.reduce((a,el) => a + el, 0);
  }
}

const dromeSum = new DimmaDrome(str);

console.log(dromeSum.getAndSumDromes());

console.log(36123301264 - 36037497037)