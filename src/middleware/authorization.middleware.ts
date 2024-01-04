import { Response, Request, NextFunction } from "express";

export class AuthorizationMiddleware {
  checkAuthorization(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).send("Unauthorized");
    }
    const [authType, token] = authorization.split(" ");
    if (authType !== "Bearer") {
      return res.status(401).send("Unauthorized");
    }
    if (token !== "123") {
      return res.status(401).send("Unauthorized");
    }
    next();
  }
}
