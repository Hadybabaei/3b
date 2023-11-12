import { ParentChild } from "../interfaces/parentChild.interface";
import prisma from "../utils/database/prismaclient";

class ParentChildService {
  private _parentChildModel = prisma.parentsOnChilds;

  public assignParentOnChilds = async (
    parentId: number,
    childId: number,
    userId: string
  ): Promise<ParentChild | void> => {
    try {
      return await this._parentChildModel.create({
        data: {
          childId,
          parentId,
          assignedBy: userId,
        },
      });
    } catch (err) {
      throw err;
    }
  };
}

export default ParentChildService