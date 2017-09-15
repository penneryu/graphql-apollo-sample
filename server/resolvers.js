// 将就一下，用内存里的数组作为数据库
const people = [ ];
const resolvers = {
  Query: {
    // 获取一个person
    person (_, { id }) {
      return people[id];
    },
    // 获取所有的person
    people () {
      return people;
    }
  },
  Mutation: {
    person (_, { input }) {
      // 如果该person已存在则进行更新
      if (input.id in people) {
        people[input.id] = input;
        return input;
      }
      // 默认添加（或创建）该person
      // 将id设为记录的索引
      input.id = people.length
      people.push(input)
      return input
    },
  },
  Person: {
    // 将好友Id解析成一条person记录
    bestFriend (person) {
      return people[person.bestFriend];
    }
  }
};

module.exports = resolvers;