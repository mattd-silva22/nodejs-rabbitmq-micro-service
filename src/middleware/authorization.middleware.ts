import { HttpStatusCode } from "axios";
import { Response, Request, NextFunction } from "express";

export class AuthorizationMiddleware {
  checkAuthorization(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(HttpStatusCode.Unauthorized).send("Unauthorized");
    }
    const [authType, token] = authorization.split(" ");
    if (authType !== "Bearer") {
      return res.status(HttpStatusCode.Unauthorized).send("Unauthorized");
    }
    if (token !== "123") {
      return res.status(HttpStatusCode.Unauthorized).send("Unauthorized");
    }
    next();
  }
}
