import { prisma } from "./../../../../generated/prisma-client";

export default {
  Mutation: {
    duplicateCheck: async (_, args) => {
      const { word, action } = args;
      let exist;
      try {
        // email 중복체크
        if (action === "email") {
          exist = await prisma.$exists.user({
            email: word
          });
          // usenname 중복체크
        } else if (action === "username") {
          exist = await prisma.$exists.user({
            username: word
          });
        }
        return exist;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
