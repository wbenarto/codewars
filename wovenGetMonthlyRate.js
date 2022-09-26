/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns {number} The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param {string} month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param {object} subscription - May be null
 *   If present, has the following structure:
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param {array} users - May be empty, but not null
 *   Has the following structure:
 *   [
 *     {
 *       'id': 1,
 *       'name': "Employee #1",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       'deactivatedOn': new Date("2022-04-10")
 *     },
 *     {
 *       'id': 2,
 *       'name': "Employee #2",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       'deactivatedOn': null
 *     },
 *   ]
 */
 function monthlyCharge(month, subscription, users) {
    const days = daysInMonth(month.split('-')[1],month.split('-')[0] )
    const curMonth = month.split('-')[1]
    const curYear = month.split('-')[0]
    // your code here!
    let total = 0
  
    const dailyRate = subscription.monthlyPriceInCents / days
  
    for (let each of users) {
  
      console.log(each)
      
      const dateActivated = each.activatedOn.getDate()
      const monthActivated = each.activatedOn.getMonth() + 1
       let rate = 0
      
  //     if (each.deactivatedOn != null) {
  //       const dateDeactivated = each.deactivatedOn.getDate()
  //       const monthDeactivated =  each.deactivatedOn.getMonth() + 1 
  //     } else {
  //        const dateDeactivated = 0
  //        const monthDeactivated = 0
  //     }
      if (month == monthActivated) {
        // total days - start day * daily rate
        
      } else {
        // total days * daily rate
        rate = lastDayOfMonth(new Date(year, month, date)).getDate() * dailyRate
        total += rate
      }
   
  
  //     const dateDeactivated = {each.deactivatedOn ? each.deactivatedOn.getDate() : 0}
  //     const monthDeactivated = {each.deactivatedOn ? each.deactivatedOn.getMonth() + 1 : 0}
  
   }
    
    return total
      
    
  }
  
  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
  
  /*******************
  * Helper functions *
  *******************/
  
  /**
   * Takes a Date instance and returns a Date which is the first day
   * of that month. For example:
   *
   * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
   *
   * Input type: Date
   * Output type: Date
  **/
  function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }
  
  /**
   * Takes a Date object and returns a Date which is the last day of that month.
   *
   * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
   *
   * Input type: Date
   * Output type: Date
  **/
  function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
  }
  
  /**
   * Takes a Date object and returns a Date which is the next day.
   * For example:
   *
   * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
   * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
   *
   * Input type: Date
   * Output type: Date
  **/
  function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  }