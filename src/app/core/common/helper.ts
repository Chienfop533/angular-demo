
import { HttpParams } from '@angular/common/http';

export function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

export function downloadFileFromBlob(data: Blob,fileName) {
  const downloadUrl = URL.createObjectURL(data);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = fileName; // đặt tên tệp tin tại đây
  link.click();
}

export function diffDateTime(dt1: any, dt2: any) {
  var diffMs = (dt2 - dt1);
  var diffDays = Math.floor(diffMs / 86400000); // days
  var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var diffMins = ((diffMs % 86400000) % 3600000) / 60000; // minutes
  //console.log("Thời gian hết hạn token: " +diffDays*24*60*60 + diffHrs*60*60+diffMins*60 +" giây")
  return (diffDays * 24 * 60 * 60 + diffHrs * 60 * 60 + diffMins * 60);
}

export function blobToFile(theBlob: Blob, fileName: string): File {
  var b: any = theBlob;
  b.lastModifiedDate = new Date();
  b.name = fileName;
  return <File>theBlob;
}

export function unflattern(arr) {
  let arrayParent = arr.filter(x => x.ParentId == 0);
  for (var i = 0; i < arrayParent.length; i++) {
    var node = arrayParent[i];
    node.children = [];

    let childs = arr.filter(x => x.ParentId == node.Id);
    if (childs.length > 0) {
      for (var j = 0; j < childs.length; j++) {
        let nodeSub = childs[j];
        nodeSub.children = [];
        nodeSub.children = nodeSub.children.concat(arr.filter(x => x.ParentId == nodeSub.Id))
      }
      node.children = node.children.concat(childs);
    }
  }
  return arrayParent;
}

export function dateConvertToString(date?: Date) {
  if (date == null) return null;
  date = new Date(date);
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  return yyyy + '-' + mm + '-' + dd + 'T00:00:00';

}

export function safeIdEntity(entity) {
  for (const property in entity) {
    if (typeof entity[property] == "object" && entity[property] != null) {
      if (entity[property] instanceof Date) {
        entity[property] = dateConvertToString(entity[property]);
      }

      //Nếu là mảng
      if (entity[property] instanceof Array && entity[property].length > 0) {
        for (var i = 0; i < entity[property].length; i++) {
          for (const propertySub in entity[property][i]) {
            if ((propertySub.toString().includes('Id') && typeof entity[property][i][propertySub] == "string")
              || (propertySub.toString().includes('Id') && typeof entity[property][i][propertySub] == "number" && entity[property][i][propertySub] < 0)) {
              entity[property][i][propertySub] = 0;
            }
            // else if(typeof entity[property][i][propertySub] =="object"){
            //   for(var j = 0; j< entity[property][i][propertySub].length ;j++){
            //     this.safeIdEntity(entity[property][i][propertySub][j]);
            //     }
            //   }
          }
        }
      }
    }

  }
}
export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

//  -1 : if d1 < d2
//   0 : if d1 = d2
//   1 : if d1 > d2
export function compareDate(d1: any, d2: any) {

  if (typeof d1 == "string") {
    d1 = new Date(d1);
  }
  if (typeof d2 == "string") {
    d2 = new Date(d2);
  }

  let d1withoutTime = withoutTime(d1);
  let d2withoutTime = withoutTime(d2);
  if (d1withoutTime < d2withoutTime)
    return -1;
  else if (d1withoutTime > d2withoutTime) {
    return 1;
  }
  else
    return 0;

}

export function withoutTime(date: Date): Date {
  date.setHours(0, 0, 0, 0);
  return date;
}


export function objectToFormData(obj: any, formData = new FormData(), namespace = ''): FormData {
  for (let property in obj) {
    if (!obj.hasOwnProperty(property) || !obj[property]) {
      continue;
    }

    let formKey = namespace ? `${namespace}[${property}]` : property;

    if (obj[property] instanceof Date) {
      formData.append(formKey, obj[property].toISOString());
    } else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
      objectToFormData(obj[property], formData, formKey);
    } else {
      formData.append(formKey, obj[property]);
    }
  }

  return formData;
}

export function getNameUser(name: string): string {
  if (name == null || name == undefined || name == "") {
    return "";
  }
  const names = name.split(' '); // tách các từ trong tên thành một mảng
  let initials = '';

  // lặp qua các từ trong tên và lấy hai ký tự đầu tiên của mỗi từ cuối cùng
  let j = 0;
  for (let i = names.length; i > 0; i--) {
    j++;
    if (j <= 2) {
      const lastWord = names[i - 1].charAt(0); // lấy chữ cuối cùng của từ
      initials += lastWord;
    }
  }

  return reverseString(initials.toUpperCase()); // chuyển chuỗi initials thành chữ in hoa và trả về
}

export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// export function toLocalTime(date: string, formatStr: string = "DD/MM/YYYY HH:mm") {
//   if (date == null || date == "") {
//     return "";
//   }
//   let utcDate = moment.utc(date).toDate()
//   let fomated = moment(utcDate).format(formatStr);
//   return fomated;
// }



// export function toUTCTime(date: string) {
//   let utcDate = moment(date).utc().format("YYYY-MM-DDTHH:mm:ssZ");
//   return utcDate.toString();
// }

// export function formatDate(date: any, formatStr: string = "DD/MM/YYYY HH:mm") {
//   let utcDate = moment(date).format(formatStr);
//   return utcDate.toString();
// }

export function toQueryParam(filter) {
  let params = new HttpParams();
  Object.keys(filter).forEach(key => {
    params = params.append(key, filter[key]);
  });

  return params;
}

export function isNullOrEmpty(input) {
  if (input == '' || input == null || input == undefined) {
    return true;
  }
  return false;
}
