export default interface ITokenRepository {
  create(userId: string): Promise<string>;
  findByToken(token: string): Promise<string | undefined>;
}
