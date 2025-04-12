import IBlog from "../../../DomainLayer/BlogDomain.";
import IResource from "../../../DomainLayer/ResourceDomain";
import IThread from "../../../DomainLayer/ThreadsDomain";
import IUnit from "../../../DomainLayer/UnitDomain";
import IUser from "../../../DomainLayer/UserDomain";
import AdminRepo from "../../../UsecaseLayer/Interface/AdminRepo";
import BlogSchema from "../../database/BlogSchema";
import ResourceSchema from "../../database/ResourceSchema";
import ThreadSchema from "../../database/ThreadSchema";
import UnitSchema from "../../database/UnitSchema.";
import UserSchema from "../../database/UserSchema";


class AdminRepository implements AdminRepo {


    async findByEmail(email: string): Promise<IUser | any> {
        try {
          const User = await UserSchema.findOne({ email: email });
          return User;
        } catch (error) {
          console.log(error);
          return error;
        }
      }


      async AddUser(addNewUser: IUser): Promise<IUser | any> {
        try {
          const newUser = new UserSchema(addNewUser);
          const savedUser = await newUser.save();
          return savedUser.toObject() as IUser;
        } catch (error) {
          console.log(error);
          return error;
        }
      }

      

      async updateUser(update: IUser): Promise<IUser | any> {
        try {
          const newUser = new UserSchema(update);
          const savedUser = await newUser.save();
          return savedUser.toObject() as IUser;
        } catch (error) {
          console.log(error);
          return error;
        }
      }


      async deleteUser(userId :string): Promise<IUser | any>{
        try{
         
            const deleteUser = await UserSchema.findByIdAndDelete(userId);
            return deleteUser

        }catch(error){
            console.log(error)
        }
      }

      

      async fetchUser(): Promise<IUser | any>{
        try{
         
            const fetchUser = await UserSchema.find();
            return fetchUser

        }catch(error){
            console.log(error)
        }
      }

      
      async fetchThread(): Promise<IThread | any>{
        try{
         
            const fetchThread = await ThreadSchema.find();
            return fetchThread

        }catch(error){
            console.log(error)
        }
      }


      

      async threadActionStatus(threadId :string , actionStatus:string): Promise<IThread | any>{
        try{
         
            const fetchThread = await ThreadSchema.findByIdAndUpdate(
                threadId,
                { $set: { approvalStatus: actionStatus } },   
                { new: true } 
            );;
            return fetchThread

        }catch(error){
            console.log(error)
        }
      }

      async editThread( thread:IThread): Promise<IThread | any>{
        try{
    
          const editThread = await ThreadSchema.findByIdAndUpdate(
            thread._id, 
            { $set: { ...thread } }, 
            { new: true }
          );

          return editThread;
    
        }catch(error){
          console.log(error)
        }
      }

      

      async deleteUserComment( threadId:string , userId :string): Promise<IThread | any>{
        try{
    
            const deleteUserComment = await ThreadSchema.findByIdAndUpdate(
                threadId,
                { $pull: { comments: userId } },
                { new: true }
              );

          return deleteUserComment;
    
        }catch(error){
          console.log(error)
        }
      }

      

      async deleteThread( threadId:string): Promise<IThread | any>{
        try{
    
            const deleteThread = await ThreadSchema.findByIdAndDelete( threadId );

          return deleteThread;
    
        }catch(error){
          console.log(error)
        }
      }

      
      async fetchResource(): Promise<IResource | any>{
        try{
    
            const fetchResource = await ResourceSchema.find();

          return fetchResource;
    
        }catch(error){
          console.log(error)
        }
      }

      async resourceActionStatus(resourceId :string , actionStatus:string): Promise<IResource | any>{
        try{
         
            const fetchResource = await ResourceSchema.findByIdAndUpdate(
                resourceId,
                { $set: { approvalStatus: actionStatus } },   
                { new: true } 
            );;
            return fetchResource

        }catch(error){
            console.log(error)
        }
      }

      
      async addNewsAndBlogs(NewsAndBlogs:IBlog): Promise<IBlog | any> {
        try {
          const newNewsAndBlogs = new BlogSchema(NewsAndBlogs);
          const savedNewsAndBlogs = await newNewsAndBlogs.save();
         return savedNewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }

      async editNewsAndBlogs(NewsAndBlogs:IBlog): Promise<IBlog | any> {
        try {
          const editNewsAndBlogs = await BlogSchema.findByIdAndUpdate(
            NewsAndBlogs._id,
            { $set: NewsAndBlogs },
            { new: true }
          );
          
         return editNewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }

      async deleteNewsAndBlogs(BlogId:string): Promise<IBlog | any> {
        try {
          const savedNewsAndBlogs = await BlogSchema.findOneAndDelete({_id:BlogId});
          return savedNewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }
      

      async fetchBlogs(): Promise<IBlog | any>{
        try{
    
            const fetchBlogs = await BlogSchema.find();

          return fetchBlogs;
    
        }catch(error){
          console.log(error)
        }
      }
      
      async blogActionStatus(_id :string , actionStatus:boolean): Promise<IBlog | any>{
        try{
         
          const updatedBlog = await BlogSchema.findByIdAndUpdate(
            _id,
            { $set: { approvalStatus: actionStatus } },
            { new: true }
          );
          console.log(updatedBlog)

            return updatedBlog

        }catch(error){
            console.log(error)
        }
      }

      async fetchPalliative(): Promise<IUnit | any>{
        try{
          const fetchPalliative = await UnitSchema.find();
          return fetchPalliative;
        }catch(error){
          console.log(error)
        }
      }
      

      async addPalliative(unit:IUnit): Promise<IUnit | any>{
        try{
            const newBlog = new BlogSchema(unit);
            const savedBlog = await newBlog.save();
            return savedBlog;
        }catch(error){
          console.log(error)
        }
      }

      
      async editPalliative(unit:IUnit): Promise<IUnit | any>{
        try{
            const savedBlog = await UnitSchema.findByIdAndUpdate(
                unit?._id,
                { $set: { ...unit } }, 
                { new: true }
              );
            return savedBlog;
        }catch(error){
          console.log(error)
        }
      }
      

      async removePalliative(unitId:string): Promise<IUnit | any>{
        try{
            const removePalliative = await UnitSchema.findByIdAndDelete(unitId);
            return removePalliative;
        }catch(error){
          console.log(error)
        }
      }

      async LastDayUserRegistration(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);  

          const lastDayUserRegistration = await UserSchema.find({
             createdAt: { $gte: yesterday }
          }).sort({ createdAt: -1 }); 

          return lastDayUserRegistration;

        }catch(error){
          console.log(error)
        }
      }

      async LastWeekUserRegistration(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);  
          
          const lastWeekUserRegistration = await UserSchema.find({
            createdAt: { $gte: sevenDaysAgo }
          }).sort({ createdAt: -1 });
          
          return lastWeekUserRegistration;
        }catch(error){
          console.log(error)
        }
      }

      async LastMonthUserRegistration(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);  

          const lastMonthUserRegistration = await UnitSchema.find({
            createdAt: { $gte: thirtyDaysAgo }
          }).sort({ createdAt: -1 });  

          return lastMonthUserRegistration;

        }catch(error){
          console.log(error)
        }
      }

      async LastDayResource(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000); 

          const lastDayResource = await ResourceSchema.find({
            createdAt: { $gte: yesterday }
         }).sort({ createdAt: -1 }); 
          return lastDayResource;
        }catch(error){
          console.log(error)
        }
      }

      async LastWeekResource(): Promise<IUnit | any>{
        try{
           const now = new Date();
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);  
          
          const lastWeekResource= await ResourceSchema.find({
            createdAt: { $gte: sevenDaysAgo }
          }).sort({ createdAt: -1 });
          
          return lastWeekResource;
        }catch(error){
          console.log(error)
        }
      }

      async LastMonthResource(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);  

          const lastMonthResource = await ResourceSchema.find({
            createdAt: { $gte: thirtyDaysAgo }
          }).sort({ createdAt: -1 });  

          return lastMonthResource;
        }catch(error){
          console.log(error)
        }
      }

      async LastDayNewsAndBlogs(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000); 

          const lastDayNewsAndBlogs = await BlogSchema.find({
            createdAt: { $gte: yesterday }
         }).sort({ createdAt: -1 }); 
          return lastDayNewsAndBlogs;
        }catch(error){
          console.log(error)
        }
      }

      async LastWeekNewsAndBlogs(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);  
          
          const lastWeekNewsAndBlogs= await BlogSchema.find({
            createdAt: { $gte: sevenDaysAgo }
          }).sort({ createdAt: -1 });
          
          return lastWeekNewsAndBlogs;
        }catch(error){
          console.log(error)
        }
      }

      async LastMonthNewsAndBlogs(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);  

          const lastMonthNewsAndBlogs = await BlogSchema.find({
            createdAt: { $gte: thirtyDaysAgo }
          }).sort({ createdAt: -1 });  

          return lastMonthNewsAndBlogs;
        }catch(error){
          console.log(error)
        }
      }

      async LastDayThread(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000); 

          const lastDayThread = await ThreadSchema.find({
            createdAt: { $gte: yesterday }
         }).sort({ createdAt: -1 }); 
          return lastDayThread;
        }catch(error){
          console.log(error)
        }
      }

      async LastWeekThread(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);  
          
          const lastWeekThread= await ThreadSchema.find({
            createdAt: { $gte: sevenDaysAgo }
          }).sort({ createdAt: -1 });
          
          return lastWeekThread;
        }catch(error){
          console.log(error)
        }
      }

      async LastMonthThread(): Promise<IUnit | any>{
        try{
          const now = new Date();
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);  

          const lastMonthThread = await ThreadSchema.find({
            createdAt: { $gte: thirtyDaysAgo }
          }).sort({ createdAt: -1 });  

          return lastMonthThread;
        }catch(error){
          console.log(error)
        }
      }

      async TotalUsers(): Promise<IUnit | any>{
        try{
          const TotalUsers = await UserSchema.countDocuments();
          return TotalUsers;
        }catch(error){
          console.log(error)
        }
      }

      async TotalThreads(): Promise<IUnit | any>{
        try{
          const TotalThreads = await ThreadSchema.countDocuments();
          return TotalThreads;
        }catch(error){
          console.log(error)
        }
      }

      async TotalResources(): Promise<IUnit | any>{
        try{
          const TotalResources = await ResourceSchema.countDocuments();
          return TotalResources;
        }catch(error){
          console.log(error)
        }
      }

      async TotalNewsAndBlogs(): Promise<IUnit | any>{
        try{
          const TotalNewsAndBlogs = await BlogSchema.countDocuments();
          return TotalNewsAndBlogs;
        }catch(error){
          console.log(error)
        }
      }

      async TopLikedThreads(): Promise<IUnit | any>{
        try{
          const TopLikedThreads = await ThreadSchema.find()
          .sort({ likes: -1 }) ;
          return TopLikedThreads;
        }catch(error){
          console.log(error)
        }
      }

      async TopLikedResources(): Promise<IUnit | any>{
        try{
          const TopLikedResources = await ResourceSchema.find()
          .sort({ likes: -1 }) ;

          return TopLikedResources;
        }catch(error){
          console.log(error)
        }
      }

      async TopLikedNewsAndBlogs(): Promise<IUnit | any>{
        try{
          const TopLikedNewsAndBlogs = await BlogSchema.find()
          .sort({ likes: -1 }) ;

          return TopLikedNewsAndBlogs;
        }catch(error){
          console.log(error)
        }
      }


}

export default AdminRepository;